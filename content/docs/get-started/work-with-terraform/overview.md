---
title: Work with Terraform
---

Bytebase provides the [Terraform Provider](https://registry.terraform.io/providers/bytebase/bytebase) to let you manage your Bytebase resources via Terraform. Users can use Terraform provider to manage following Bytebase resources:

- Environment
- Instance
- More to come

## Prerequisites

1. Install [Terraform](https://developer.hashicorp.com/terraform/downloads?product_intent=terraform)

2. Start Bytebase to get the server running.

## Configuration

### Create service account

Redirect to Bytebase member management page (/setting/member).

Name your service account, and grant the **Owner** or **DBA** role to it.

![create-service-account](/docs/get-started/work-with-terraform/create-service-account.webp)

After creation, you can copy the service key as `service_key` and the email as `service_account` to initialize the Bytbase provider in next step.

![service-account](/docs/get-started/work-with-terraform/service-account.webp)

### Config options

- `url`: Required. The [external URL](/docs/get-started/install/external-url) for your Bytebase server. Alternatively, you can set `BYTEBASE_URL` environment variable.
- `service_account`: Required. The Bytebase service account email. The user must have **Owner** or **DBA** role. Alternatively, you can set `BYTEBASE_SERVICE_ACCOUNT` environment variable.
- `service_key`: Required. The Bytebase service account key. Alternatively, you can set `BYTEBASE_SERVICE_KEY` environment variable.

### Config examples

```hcl
# Configure the Bytebase Provider with options

terraform {
  required_providers {
    bytebase = {
      source = "bytebase/bytebase"
      version = "0.0.3"
    }
  }
}

provider "bytebase" {
  service_account = "<Your Bytebase service account email>"
  service_key     = "<Your Bytebase service account key>"
  url             = "<Your Bytebase external URL>"
}
```

You can also pass the options via environment variables:

```hcl
# Configure the Bytebase Provider without options

terraform {
  required_providers {
    bytebase = {
      source = "bytebase/bytebase"
      version = "0.0.3"
    }
  }
}

provider "bytebase" {}
```

```bash
export BYTEBASE_URL=<Your Bytebase EXTERNAL URL> BYTEBASE_SERVICE_ACCOUNT=<Your Bytebase service account email> BYTEBASE_SERVICE_KEY=<Your Bytebase service account key>

terraform init && terraform plan
```

## Usage

Check the [sample usage](https://github.com/bytebase/terraform-provider-bytebase/blob/main/examples/main.tf).

Check the [Bytebase Terraform Provider reference](https://registry.terraform.io/providers/bytebase/bytebase/latest/docs) for details.

## Reference

- To learn the Terraform language: https://developer.hashicorp.com/terraform/language
- Check official tutorials to learn how to use the terraform provider: https://developer.hashicorp.com/terraform/tutorials
