---
title: Unable to start Bytebase with Docker
---

## Using [Colima](https://github.com/abiosoft/colima)

Due to the vm mechanism of colima, try to use the `--mount` option when starting colima as shown below:

```bash
$ mkdir ~/volumes
$ colima start --mount ~/volumes:w
$ docker run --init --name bytebase --restart always --add-host host.docker.internal:host-gateway --publish 8080:8080 --volume ~/.bytebase/data:/var/opt/bytebase bytebase/bytebase:1.0.5 --data /var/opt/bytebase --host http://localhost --port 8080
```

