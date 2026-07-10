# ---------- Stage 1: Build ----------
FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /dunova-backend

COPY . .

RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre

WORKDIR /dunova-backend

COPY --from=build /dunova-backend/target/*.jar api-1.0.0.jar

EXPOSE 8080

CMD ["java","-jar","api-1.0.0.jar"]
