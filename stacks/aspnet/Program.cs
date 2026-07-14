var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/", () => "Hello from an AI-native ASP.NET Core app 👋");
app.MapGet("/health", () => Results.Json(new { status = "ok" }));

app.Run();
