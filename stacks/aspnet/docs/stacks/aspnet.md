# ASP.NET Core (.NET) — Setup Notes

Starter guidance. Generate the full app via the .NET CLI:

```
dotnet new webapi -o . -f net10.0
dotnet run
```

## Recommended additions
- EF Core + a database provider (Npgsql for Postgres)
- Authentication/authorization (JWT bearer)
- Swashbuckle / built-in OpenAPI for API docs
