# Node.js + NestJS — Setup Notes

Starter guidance for the NestJS stack. Flesh out as the project grows.

## Getting started
```
pnpm add -g @nestjs/cli
nest new . --package-manager pnpm
pnpm start:dev
```

## Recommended additions
- `@nestjs/config` for env config
- `class-validator` + `class-transformer` for DTO validation
- A database module (TypeORM / Prisma)
