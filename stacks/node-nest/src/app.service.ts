import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello from an AI-native NestJS API 👋";
  }
}
