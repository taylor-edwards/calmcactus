FROM node:14

WORKDIR /app
COPY . .
EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm install

ENV NODE_ENV "production"
RUN npm run build

CMD ["npm", "run", "start"]
