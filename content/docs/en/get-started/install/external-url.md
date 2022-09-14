---
title: Configure External URL
---

<hint-block type="warning">

You must configure the correct --external-url before configuring [VCS integration](/docs/vcs-integration/overview).

</hint-block>

When running Bytebase in production, you should not make the node that's running the Bytebase server directly accessible to the public internet. Instead, you should set up an internet gateway such as Ngnix or Caddy by configuring [--external-url](/docs/reference/command-line#--external-url-string) to the endpoint exposed by the gateway.

![choose-repo](/docs/en/get-started/install/external-url-flow.webp)
