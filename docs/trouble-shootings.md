---
title: Trouble Shootings
order: 90000
---

# Trouble Shootings

## How to perform upgrade

### Background

Bytebase stores its own metadata in a [Postgres](https://www.postgresql.org/) database. As we add new features, we may also perform database schema changes (i.e. database migrations).

Because Bytebase is still under active development so we are making breaking schema changes from time to time. Usually when Bytebase is not working properly and the console emits logs like `"no such column"`, it's because Bytebase is running against an old incompatible database schema.

`ERROR server/anomaly_scanner.go:131 Failed to retrieve database list {"instance": "MySQL Prod (Follow the "External Link" field to bring up the MySQL server)", "error": "no such column: schema_version"}`

### Use version number to determine whether there is breaking schema changes.

Bytebase uses [semantic version](https://semver.org/) in the MAJOR.MINOR.PATCH form. Because we are still in alpha, so the MAJOR version is always 0. When there is a breaking schema change, we will bump up the MINOR version. e.g.

1. 0.10.0 -> 0.11.0 indicates a breaking schema change in the new 0.11.0 version.
1. 0.10.0 -> 0.10.1 indicates non-breaking schema change in the new 0.10.1 version.

You don't need to do anything when the upgrade does NOT involve a breaking schema change. But when there **exists** breaking schema change (MINOR version change), please follow below.

### Perform breaking schema change upgrade

#### Option 1 - Reset the data

If you are just testing out Bytebase and don't need the existing data, you can just remove the existing data.

#### Running using naked bytebase binary (without docker)

The data is stored under the [--data](https://docs.bytebase.com/reference/command-line#data-less-than-less-than-directory-greater-than-greater-than) directory. By default, it's the same directory where the bytebase binary runs. Just remove the 3 files:
* bytebase.db
* bytebase.db-shm
* bytebase.db-wal

![Screenshot](https://raw.githubusercontent.com/bytebase/bytebase/main/docs/assets/reset-bytebase-data.png)

#### Running inside docker

If you run Bytebase using Docker, say you use the following command like our help doc shows:

`$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 5678:5678 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:0.11.0 --data /var/opt/bytebase --host http://localhost --port 5678`

Then the data is stored under `~/.bytebase/data`. So you just need to run `rm -rf ~/.bytebase/data` and restart Bytebase again.


#### Option 2 - Upgrade the existing data

If you have already seriously used Bytebase in production and want to keep the existing data. First **thank you** for being our early adopters, and just email us at support@bytebase.com. We will help you offline to migrate the data to the latest version.

---

## How to solve OAuth CORS error with old GitLab version

When using old GitLab version (e.g. 9.4.0) to setup VCS integration, you may encounter OAuth error https://github.com/bytebase/bytebase/issues/467:

<p><img width="500" alt="image" src="https://user-images.githubusercontent.com/24653555/154427178-5c3b0d15-6ef3-4e65-8b62-02812a9e7b27.png"></p>

This is a common problem in the old GitLab verison:
* https://gitlab.com/gitlab-org/gitlab-foss/-/issues/19470
* https://gitlab.com/gitlab-org/gitlab/-/issues/300077

### Verify the problem

Open your browser devtool with `F12`, check the `Network` section. If the latest token request with **`CORS error`** status, we can be certain that it's the `/oauth/token` api CORS error inside GitLab.

<p><img width="500" alt="image" src="https://user-images.githubusercontent.com/24653555/154426690-d5a98d22-e8e2-4dc9-b66c-ce4e436d64f9.png"></p>

### Potential solution

We cannot change GitLab source code to add the `Access-Control-Allow-Origin: *` to `/oauth/token` response header, but can use Nginx as a reverse proxy for GitLab (the other proxy service works the similar way).

#### CORS solution with Nginx

Add `add_header` codes directive to the base path location block of your Nginx GitLab configuration file.

```nginx
server {
  ...
  location / {
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header 'Access-Control-Allow-Headers' 'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
    add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT,DELETE,PATCH';

    if ($request_method = 'OPTIONS') {
      add_header 'Access-Control-Allow-Origin' $http_origin;
      add_header 'Access-Control-Max-Age' 1728000;
      add_header 'Content-Type' 'text/plain charset=UTF-8';
      add_header 'Content-Length' 0;
      return 204;
    }

    if ($request_method != GET) {
      add_header 'Access-Control-Allow-Origin' '*';
    }
    ...
  }
  ...
}
```

Run the following command to reload your updated config file.

```bash
sudo nginx -s reload
```

Afterwards, try the GitLab setup again.

---

## Why my bytebase with docker won't start?

### Using [Colima](https://github.com/abiosoft/colima):

Due to the vm mechanism of colima, try to use the `--mount` option when starting colima as shown below:

```bash
$ mkdir ~/volumes
$ colima start --mount ~/volumes:w
$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 8080:8080 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:1.0.3 --data /var/opt/bytebase --host http://localhost --port 8080
```

