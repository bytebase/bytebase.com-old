---
title: Configure with Terraform
---

Bytebase provides the [Terraform Provider](https://registry.terraform.io/providers/bytebase/bytebase) to let you manage your Bytebase resources via Terraform. Users can use Terraform provider to manage following Bytebase resources:

- Environment
- Instance
- More to come

## Prerequisites

1. Install [Terraform](https://developer.hashicorp.com/terraform/downloads?product_intent=terraform)

2. Start Bytebase to get the OpenAPI server running. The OpenAPI endpoint is at `/v1` under [external-url](/docs/get-started/install/external-url).

3. Create a Bytebase account with **Owner** or **DBA** role. You can register a new account from Bytebase UI.

## Configuration

### Config options

- `bytebase_url`: Required. The OpenAPI full URL for your Bytebase server. Alternatively, you can set `BYTEBASE_URL` environment variable. The URL should like `<external url>/v1`
- `email`: Required. The Bytebase user account email. The user must have **Owner** or **DBA** role. Alternatively, you can set `BYTEBASE_USER_EMAIL` environment variable.
- `password`: Required. The Bytebase user account password. Alternatively, you can set `BYTEBASE_USER_PASSWORD` environment variable.

### Config examples

```hcl
# Configure the Bytebase Provider with options

terraform {
  required_providers {
    bytebase = {
      source = "bytebase/bytebase"
      version = "0.0.2"
    }
  }
}

provider "bytebase" {
  email        = "<Your Bytebase account email>"
  password     = "<Your Bytebase account password>"
  bytebase_url = "<Your Bytebase OpenAPI full URL, like <external url>/v1>"
}
```

You can also pass the options via environment variables:

```hcl
# Configure the Bytebase Provider without options

terraform {
  required_providers {
    bytebase = {
      source = "bytebase/bytebase"
      version = "0.0.2"
    }
  }
}

provider "bytebase" {}
```

```bash
export BYTEBASE_URL=<Your Bytebase OpenAPI URL> BYTEBASE_USER_EMAIL=<Your Bytebase account email> BYTEBASE_USER_PASSWORD=<Your Bytebase account password>

terraform init && terraform plan
```

## Usage

Check the [sample usage](https://github.com/bytebase/terraform-provider-bytebase/blob/main/examples/main.tf).

Check the [Bytebase Terraform Provider reference](https://registry.terraform.io/providers/bytebase/bytebase/latest/docs) for details.

## Reference

- To learn the Terraform language: https://developer.hashicorp.com/terraform/language
- Check official tutorials to learn how to use the terraform provider: https://developer.hashicorp.com/terraform/tutorials
