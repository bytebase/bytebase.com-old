---
title: 🐞 Troubleshoot
order: 40205
---

# 🐞 Troubleshoot

### Committed migration file does not trigger issue creation

1. Check the committed file conforms to the [naming convention](/docs/use-bytebase/vcs-integration/name-and-organize-schema-files) and directory structure conforms to the [layout](/docs/use-bytebase/vcs-integration/name-and-organize-schema-files#file-organization).
2. Make sure [--host](/docs/reference/command-line#host-less-than-less-than-string-greater-than-greater-than),[--port](/docs/reference/command-line#port-less-than-less-than-number-greater-than-greater-than) match exactly to the host:port address where Bytebase supposed to be visited. Bytebase uses --host, --port to configure the VCS webhook callback to trigger the issue creation.

### Failed to create webhook xxx, status code: 422 for GitLab

From [GitLab](https://docs.gitlab.com/ee/security/webhooks.html)

> To prevent this type of exploitation from happening, starting with GitLab 10.6, all Webhook requests to the current GitLab instance server address and/or in a private network are forbidden by default. That means that all requests made to 127.0.0.1, ::1 and 0.0.0.0, as well as IPv4 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 and IPv6 site-local (ffc0::/10) addresses aren’t allowed.

So if your Bytebase instance resides in the same private network as your GitLab instance, you will need to enable "Allow requests to the local network from web hooks and services" first.

### "Change Data in VCS" , "Alter Schema in VCS" button does not direct to the configured GitLab instance

Please make sure you are configuring the [GitLab external_url](https://docs.gitlab.com/omnibus/settings/configuration.html#configure-the-external-url-for-gitlab) correctly, the **host:port** must exactly matches the one accessed by Bytebase. It's called `external_url` because that's how external systems like Bytebase reaches the GitLab instance.

A common mistake is user misconfigures the port when using port forwarding. e.g. GitLab is running on port 7890, while it's exposed to the public on port 7891. In such case the `external_url` should be `https://example.com:7891` instead of `https://example.com:7890`
