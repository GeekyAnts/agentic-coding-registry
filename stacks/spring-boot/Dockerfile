# build stage
FROM gradle:9.6-jdk25 AS build
WORKDIR /app
COPY . .
RUN gradle bootJar --no-daemon

# run stage
FROM eclipse-temurin:25-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
