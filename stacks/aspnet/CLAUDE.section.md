## Stack: ASP.NET Core (.NET)

- **Language:** C#. **Framework:** ASP.NET Core (.NET 10), minimal API. Minimal
  starter — generate the full app via `dotnet new webapi`.
- **Structure:** entry `Program.cs` (builder + endpoint mapping); config in
  `appsettings.json` + env; add feature endpoints via `MapGet`/`MapPost` or
  controllers; services via the built-in DI container.
- **Conventions:** register services in the DI container (`builder.Services`);
  keep secrets in env / user-secrets, never in `appsettings.json`; validate input;
  return typed `Results`.
- **Commands:**
  ```
  dotnet run            # dev server
  dotnet build          # compile
  dotnet test           # tests
  dotnet watch run      # hot reload
  ```
