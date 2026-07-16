# Spring Boot (Java) — Setup Notes

Starter guidance. Generate the full project (incl. Gradle wrapper) via
[start.spring.io](https://start.spring.io) or:

```
spring init --dependencies=web --build=gradle --java-version=25 .
gradle bootRun
```

## Recommended additions
- Spring Data JPA + a database driver
- Spring Security (auth), Springdoc OpenAPI (docs)
- Testcontainers for integration tests
