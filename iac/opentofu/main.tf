# OpenTofu — fully-open, Terraform-compatible IaC. Run with `tofu`.
# Docs: https://opentofu.org/docs/

terraform {
  required_version = ">= 1.6"
  # Configure a remote backend for shared state (never commit state files):
  # backend "s3" {
  #   bucket = "my-tofu-state"
  #   key    = "app/terraform.tfstate"
  #   region = "us-east-1"
  # }
}

# Add provider + resource blocks here (see providers.tf).
# Example:
# resource "local_file" "example" {
#   content  = "hello from OpenTofu"
#   filename = "${path.module}/example.txt"
# }
