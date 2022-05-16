---
title: How to solve OAuth CORS error with old GitLab version
---

# How to solve OAuth CORS error with old GitLab version

When using old GitLab version (e.g. 9.4.0) to setup VCS integration, you may encounter OAuth error https://github.com/bytebase/bytebase/issues/467:

<p><img width="500" alt="image" src="https://user-images.githubusercontent.com/24653555/154427178-5c3b0d15-6ef3-4e65-8b62-02812a9e7b27.png"></p>

This is a common problem in the old GitLab verison:

* https://gitlab.com/gitlab-org/gitlab-foss/-/issues/19470
* https://gitlab.com/gitlab-org/gitlab/-/issues/300077

## Verify the problem

Open your browser devtool with `F12`, check the `Network` section. If the latest token request with **`CORS error`** status, we can be certain that it's the `/oauth/token` api CORS error inside GitLab.

<p><img width="500" alt="image" src="https://user-images.githubusercontent.com/24653555/154426690-d5a98d22-e8e2-4dc9-b66c-ce4e436d64f9.png"></p>

## Potential solution

We cannot change GitLab source code to add the `Access-Control-Allow-Origin: *` to `/oauth/token` response header, but can use Nginx as a reverse proxy for GitLab (the other proxy service works the similar way).

### CORS solution with Nginx

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

---

Afterwards, try the GitLab setup again.

