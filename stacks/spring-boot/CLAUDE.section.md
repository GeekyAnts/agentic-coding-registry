## Stack: Spring Boot (Java)

- **Language:** Java 21. **Framework:** Spring Boot 3.5. **Build:** Gradle.
  Minimal starter — generate the full project via [start.spring.io](https://start.spring.io).
- **Structure:** entry `Application.java` (`@SpringBootApplication`); REST
  controllers (`@RestController`) under `com.example.app`; config in
  `application.properties`; services/repositories as the app grows.
- **Conventions:** constructor injection; keep controllers thin (logic in
  `@Service`); use `@ConfigurationProperties` + env for config, never hardcode
  secrets; validate DTOs with `jakarta.validation`.
- **Commands:**
  ```
  gradle bootRun        # dev server (port 8080)
  gradle build          # compile + test + jar
  gradle test           # tests
  ```
