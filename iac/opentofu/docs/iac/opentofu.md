# OpenTofu — Setup Notes

```
# install: https://opentofu.org/docs/intro/install/
tofu init
tofu plan
tofu apply
```

- `.tf` files: `providers.tf`, `variables.tf`, `main.tf`.
- Use a **remote backend** for state; git-ignore `*.tfstate` + `.terraform/`.
- OpenTofu is a drop-in Terraform replacement (MPL-2.0). Docs: https://opentofu.org/docs/
