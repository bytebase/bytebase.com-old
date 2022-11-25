---
title: Work with Terraform
---

Bytebase provides the [Terraform Provider](https://registry.terraform.io/providers/bytebase/bytebase) to let you manage your Bytebase resources via Terraform.

## Prerequisites

### Bytebase

Before you start, you need to start your Bytebase to get the OpenAPI server. By default, you can access the OpenAPI via `http://localhost:8080/v1` or `<external url>/v1`.

Create a Bytebase account with **DBA** or **Owner** role. You can register a new account in Bytebase UX (the website).

### Terraform

Install the [Terraform](https://developer.hashicorp.com/terraform/downloads?product_intent=terraform)

## Configuration

### Config options

- `bytebase_url`: The OpenAPI full URL for your Bytebase server. If not provided in the configuration, you must set the `BYTEBASE_URL` variable in the environment. The URL should like `<external url>/v1`
- `email`: The Bytebase user account email. The user must have **DB** or **Owner** role. If not provided in the configuration, you must set the `BYTEBASE_USER_EMAIL` variable in the environment.
- `password`: The Bytebase user account password. If not provided in the configuration, you must set the `BYTEBASE_USER_PASSWORD` variable in the environment.

### Config examples

```terraform
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

You can also write your configuration into the environment:

```terraform
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

> You can check the [provider doc](https://registry.terraform.io/providers/bytebase/bytebase/latest/docs) for schema details.

### Environment

#### CRUD environment

The `bytebase_environment` resource supports the read, create, update or delete for a single environment.

```terraform
# Create a new environment named "dev"
resource "bytebase_environment" "dev" {
  name = "dev"
  # You can also specific the environment order
  # order = 1
}
```

#### List environment

The `bytebase_environments` data source supports the list of all environments.

```terraform
# List all environment
data "bytebase_environments" "all" {}

# Print data
output "all_environments" {
  value = data.bytebase_environments.all.environments
}
```

### Instance

#### CRUD instance

The `bytebase_instance` resource supports the read, create, update or delete for a single instance.

```terraform
# Create a new instance named "dev instance"
resource "bytebase_instance" "dev_instance" {
  name        = local.instance_name
  engine      = "POSTGRES"
  host        = "127.0.0.1"
  environment = "dev"
  # You can also provide the port, username, password
  # port = 5432
  # username = "username"
  # password = "password"
}
```

#### List instance

The `bytebase_instances` data source supports the list of all instances.

```terraform
# List all instance
data "bytebase_instances" "all" {}

# Print data
output "all_instances" {
  value = data.bytebase_instances.all.instances
}
```

---

You can check the [examples](https://github.com/bytebase/terraform-provider-bytebase/blob/main/examples/main.tf) for more complex usage examples.

### Exec the terraform provider

```bash
# install the provider
terraform init

# check changes
terraform plan

# apply changes
terraform apply

# remove resources
terraform destory
```

## Reference

- To learn the Terraform language: https://developer.hashicorp.com/terraform/language
- Check official tutorials to learn how to use the terraform provider: https://developer.hashicorp.com/terraform/tutorials
