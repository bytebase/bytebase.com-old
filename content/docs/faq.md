---
title: FAQ
---

## How to reach us?

- 💬 Join our [Discord Community](https://discord.gg/huyw7gRsyA)
- 📧 Email us at [support@bytebase.com](mailto:support@bytebase.com)
- 🎫 Open [GitHub Issue](https://github.com/bytebase/bytebase/issues)
- 🤠 Find us on [@Bytebase](https://twitter.com/bytebase)

## System requirements and supported versions

### System requirements

Bytebase is lightweight and has no external dependency. For normal workload, 1 CPU core and 2 GB RAM are sufficient.

### Supported database versions

See [Supported Databases](/docs/introduction/supported-databases).

### Supported version control systems (VCS) and providers

Bytebase only supports Git-based VCS. It currently supports:

- Self-host GitLab EE/CE
- GitLab.com
- GitHub.com

We plan to support more Git providers roughly in the following order:

- GitHub Enterprise

## How to enable https

You can use [Caddy](https://caddyserver.com/docs/quick-starts/reverse-proxy) or [Nginx](https://www.nginx.com/).

## How to enable debug mode

Debug mode emits more detailed logs on the backend as well as returning more verbose logs to the frontend.

<hint-block type="warn">

Debug mode is a global setting and is only supposed to be used for troubleshooting.

</hint-block>

### Enable --debug on startup

You can pass [--debug](/docs/reference/command-line#--debug) when starting the Bytebase.

### Toggle debug mode at runtime

If you are an OWNER or DBA, you can also toggle debug mode at runtime. The toggle is under the top-right profile dropdown

![_](/static/docs/troubleshoot-debug-mode.webp)

## Which data does Bytebase collect?

- Instance-wide anonymised usage data.
- The registered email and name of the first member in the workspace.
