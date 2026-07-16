FROM node:24-alpine
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 8787
CMD ["node", "dist/index.js"]
