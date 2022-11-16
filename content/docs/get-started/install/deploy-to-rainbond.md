---
title: Deploy to Rainbond
---

If you are unfamiliar with Kubernetes, and want to install Bytebase in Kubernetes, you can use Rainbond to deploy. [Rainbond](http://www.rainbond.com) is a cloud-native application management platform built on Kubernetes and simplifies the application deployment to Kubernetes.
## Prerequisites

To install Rainbond, please refer to [Rainbond Quick Install](https://rainbond.com/docs/quick-start/quick-install).

## Deploy Bytebase

After logging in Rainbond, click `Market` in the left menu, switch to open source app store, and search `Bytebase` in the search box, and click the `Install` button.

![](/static/docs/get-started/install/rainbond-install.webp)

Fill in the following information, and click `Confirm` button to install.

* Team: select a team or create a new team
* Cluster: select a cluster
* Application: select an application or create a new application
* Version: select a version

After installation, Bytebase can be accessed via the `Access` button.

<hint-block type="info">

Rainbond uses [--pg](/docs/get-started/install/external-postgres) to store the Bytebase metadata in the external PostgreSQL. To form --pg, you can go to the Bytebase component -> Environment configuration, and modify POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD environment variables.

Rainbond uses [--external-url](/docs/get-started/install/external-url) to provide external access to Bytebase. To customize the external URL, you can go to the Bytebase component -> Environment configuration, and modify EXTERNAL_URL environment variable.

</hint-block>

![](/static/docs/get-started/install/rainbond-topology.webp)

