---
title: Deploy in 5 Seconds
---

## Prerequisite

Before starting, make sure you have installed Docker. You can click [here](https://www.docker.com/get-started/) to get Docker.

## Deploy Bytebase with sample datasets

Open Terminal and run the command:

```bash
curl -fsS https://raw.githubusercontent.com/bytebase/bytebase/main/quickstart/getting-started.docker-compose.yml | docker-compose -f - up
```

If the above command doesn't work, try the proxy version:

```bash
curl -fsS https://ghproxy.com/https://raw.githubusercontent.com/bytebase/bytebase/main/quickstart/getting-started.docker-compose.yml | docker-compose -f - up
```

After successful execution, you will see something like this:

![_](/static/docs-assets/bytebase-installed.png)

Now you have three Docker containers:

- Bytebase
- A MySQL instance for the Test environment
- A MySQL instance for the Prod environment

Each MySQL instance has a copy of the sample dataset in it. We choose the dataset_small of [our open-source database "employee"](https://github.com/bytebase/employee-sample-database-mysql) as the sample for our tutorial.

![_](/static/docs-assets/bytebase-docker.png)

Open Bytebase in [localhost:5678](http://localhost:5678/), and create an admin account.

![_](/static/docs-assets/create-account.png)

Then you are in the workspace.

![_](/static/docs-assets/workspace.png)
