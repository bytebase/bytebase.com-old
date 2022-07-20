---
title: How to Configure ClickHouse SSL Connection
author: zp
published_at: 2022/07/20 10:37:00
feature_image: /static/blog/how-to-run-clickhouse-with-docker-and-connect-using-mysql-client/docker-and-clickhouse.webp
tags: Education
description: Configure ClickHouse SSL connection and test it by using self-signed CA.
---

## Background

ClickHouse® is an open-source, high-performance columnar OLAP database management system for real-time analytics using SQL. It supports SSL connection like most databases do.

This tutorial will show you how to configure the ClickHouse SSL connection using the self-signed CA.

## Installation

### Install ClickHouse

Follow the [ClickHouse official document](https://clickhouse.com/docs/en/getting-started/install/).  
If no errors occur, you will see something like below:

![Install ClickHouse successfully](/static/blog/how-to-configure-clickhouse-ssl-connection/install-clickhouse.webp)

### Install OpenSSL

Follow the [OpenSSL’s official site](https://www.openssl.org/source/). Depending on the machine environment, there may be different ways to achieve this.

If no errors occur, you will see something like below:

```plain
$ openssl version
OpenSSL 1.1.1f  31 Mar 2020
```

## Generate SSL Related Files

We will generate the following certificate chain:

![Certificate chain](/static/blog/how-to-configure-clickhouse-ssl-connection/ssl-key-chain.webp)

### OpenSSL Config

To generate Root CA certificate and other peers' certificate request, you need to set up a configure file as below:

```bash
cat >req.conf <<EOF
[ req ]
distinguished_name = req_distinguished_name
x509_extensions = v3_ca
prompt = no
[ req_distinguished_name ]
C = CN
ST = GD
O = Bytebase
CN = root
[ v3_ca ]
basicConstraints = critical,CA:TRUE
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid:always,issuer:always
[ v3_req ]
keyUsage = keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names
[ alt_names ]
IP.1 = YOUR_SERVER_IP
EOF
```

**Replace YOUR_SERVER_IP with your real server IP.**
Note, it uses IP address directly here in order to keep this example simple. You can use other valid [SAN](https://en.wikipedia.org/wiki/Subject_Alternative_Name) fields to meet your needs.

### Generate Root CA Key and Certificate

Generate Root CA Key. To simplify the test, you can skip specifying the passphrase.

```bash
openssl genrsa -out ca.key 2048
```

Now, use this key and OpenSSL config above to generate the CA certificate:

```bash
openssl req -x509 -new -key ca.key -sha256 -days 36500 -out ca.pem -extensions 'v3_ca' -config req.conf
```

### Generate Server Key and Certificate

Generate Server Key without the passphrase, too:

```bash
openssl genrsa -out server.key 2048
```

Use the server key and OpenSSL config above to generate the certificate of server like what you have done for CA. But the difference is that at this time you need to request the CA's Key for signing.

```bash
openssl req -new -sha256 -key server.key -out server.csr -subj "/C=CN/ST=GD/O=Bytebase/CN=YOUR_SERVER_IP"
openssl x509 -req -days 36500 -sha256 -extensions v3_req -CA ca.pem -CAkey ca.key -CAcreateserial -in server.csr -out server.pem
```

**Replace YOUR_SERVER_IP with your real server IP.**

### Generate Client Key and Certificate

From the SSL authentication perspective, Client an Server are equal partners, so you use the same steps as the server to generate client-related SSL files.

```bash
openssl genrsa -out client.key 2048
openssl req -new -sha256 -key client.key -out client.csr -subj "/C=CN/ST=GD/O=Bytebase/CN=dev.testssl.com"
openssl x509 -req -days 36500 -sha256 -extensions v3_req -CA ca.pem -CAkey ca.key -CAcreateserial -in client.csr -out client.pem
```

After completing the above steps, you should have the following files:

![Files](/static/blog/how-to-configure-clickhouse-ssl-connection/files.webp)

Those highlighted files will be used in the next section.

## Configure ClickHouse Server

### Generate dhparams

From ClickHouse config, you can see:

```xml
<clickhouse>
    <openSSL>
        <server>
            <!-- dhparams are optional. You can delete the <dhParamsFile> element.
                 To generate dhparams, use the following command:
                  openssl dhparam -out /etc/clickhouse-server/dhparam.pem 4096
                 Only file format with BEGIN DH PARAMETERS is supported.
              -->
            <!-- <dhParamsFile>/etc/clickhouse-server/dhparam.pem</dhParamsFile>-->
            ...
        </server>
    </openSSL>
</clickhouse>
```

you need to generate dhparams by using the command below:

```bash
openssl dhparam -out /etc/clickhouse-server/dhparam.pem 4096
```

It will take a couple minutes.

After completion, modify the configuration file to indicate the location of the dhparams file:

```xml
<clickHouse>
   <openSSL>
       <server>
           ...
           <dhParamsFile>/etc/clickhouse-server/dhparam.pem</dhParamsFile>
           …
       </server>
   </openSSL>
</clickHouse>
```

### Configure CA Certificate, Server Key and Server Certificate Path

You need to specify the path of CA Certificate, Server Key, Server Certificate in the configuration file:

```xml
<clickHouse>
   <openSSL>
       <server>
           <caConfig>/etc/clickhouse-server/ca.pem</caConfig>
           <certificateFile>/etc/clickhouse-server/server.pem</certificateFile>
           <privateKeyFile>/etc/clickhouse-server/server.key</privateKeyFile>
           ...
       </server>
   </openSSL>
</clickHouse>
```

### Configure Listening Port

Then, enable SSL related port by uncommenting on the following lines:

```xml
<clickHouse>
   ...
   <https_port>8443</https_port>
   <tcp_port_secure>9440</tcp_port_secure>
   ...
</clickHouse>
```

Optionally, you can disable the default non-secure port by commenting out the corresponding lines.

```xml
<clickHouse>
   ...
   <!-- <http_port>8123</http_port> -->
   <!-- <tcp_port>9000</tcp_port> -->
   ...
</clickHouse>
```

### Enable Remote Login

You need to enable Remote Login for ClickHouse so that you can test the SSL connection on a different machine than the ClickHouse Server.
Uncommenting the listen_host tag:

```xml
<clickHouse>
   ...
   <listen_host>::</listen_host>
   ...
</clickHouse>
```

Then, restart the ClickHouse server. For example, on Ubuntu:

```bash
sudo service clickhouse-server restart
```

## Test SSL Connection from Client

### Copy SSL Files to the Client

Copy the ca.pem,client.pem,client.key from the machine that runs ClickHouse server (i.e.: the machine generated them) to directory `/etc/ssl` on the machine that you will run the client.

### Through ClickHouse Client

On another machine, set-up the ClickHouse client config that you will use later:

```bash
cat >clickhouse-client-ssl.xml <<EOF
<config>
       <user>default</user>
       <password>YOUR_PASSWORD</password>
       <host>YOUR_CLICKHOUSE_SERVER_IP</host>
       <secure>true</secure>
       <openSSL>
               <client>
                       <caConfig>/etc/ssl/ca.pem</caConfig>
                       <certificateFile>/etc/ssl/client.pem</certificateFile>
                       <privateKey>/etc/ssl/client.key</privateKey>
               </client>
       </openSSL>
</config>
EOF
```

**Replace YOUR_PASSWORD with the real password of the default user of ClickHouse and replace YOUR_CLICKHOUSE_SERVER_IP with the real IP of the machine that runs ClickHouse server.**

Run the following command, and you are expected to get some output like below:

```bash
clickhouse-client –config=clickhouse-client-ssl.xml
```

![_](/static/blog/how-to-configure-clickhouse-ssl-connection/test-through-clickhouse-client.webp)

### Through MySQL Client

Use MySQL client to connect the ClickHouse server via SSL.Run the following command, and you are expected to get some output like below:

```bash
mysql -u default -p -h YOUR_SERVER_IP -P 9004 --ssl-ca=/etc/ssl/ca.pem --ssl-cert=/etc/ssl/client.pem --ssl-key=/etc/ssl/client.key --execute="STATUS"
```

**Replace YOUR_SERVER_IP with your real server IP.**

![_](/static/blog/how-to-configure-clickhouse-ssl-connection/test-through-mysql-client.webp)

As expected, the result shows that the connection is over SSL.

## Conclusion

Congratulations, you have now successfully connected to your ClickHouse server using SSL. Let’s go over the steps again:

1. Install ClickHouse and OpenSSL
2. Generate SSL related file.  
    a. Set up OpenSSL config  
    b. Root CA key and certificate  
    c. Server key and certificate  
    d.  Client key and certificate  
3. Configure ClickHouse  
    a. Generate dhparams  
    b. Set up SSL related files path in ClickHouse Server config  
    c. Enable SSL related port listened by ClickHouse  
    d. Enable remote login on ClickHouse
4. Test SSL Connection from Client  
    a. Copy SSL files to the Client  
    b. Set-up ClickHouse Client config  
    c. Use ClickHouse Client to connect to ClickHouse Server  
    d. Use MySQL Client to connect to ClickHouse Server

| Step | File(s) you create | File(s) you use |
| :-- | :---------------- | :------------- |
| 2.a - Set up OpenSSL config | req.conf | None |
| 2.b - Generate Root CA key and certificate | ca.key ca.pem ca.srl | req.conf |
| 2.c - Generate Server key and certificate | server.key server.pem server.csr | ca.pem |
| 2.d - Generate Client key and certificate | client.key client.pem client.csr | ca.pem |
| 3.a - Generate dhparams | dhparam.pem | None |
| 3.b - Set up related file path in ClickHouse Server config | None | ca.pem server.key server.pem dhparam.pem |
| 4.a - Copy SSL files to the Client | None | ca.pem client.key client.pem |
| 4.b - Set-up ClickHouse Client config | None | None |
| 4.c - Use ClickHouse Client to connect to ClickHouse Server | None | None |
| 4.d - Use MySQL Client to connect to ClickHouse Server | None | ca.pem client.key client.pem |

If you find this tutorial helpful, you might also be interested in our product [Bytebase](https://bytebase.com/), an open-source, web-based schema change management tool, which helps your data team or DevOps team manage ClickHouse schema change with UI-based or VCS-based (GitOps) schema change workflow.
