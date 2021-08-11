FROM node:14

WORKDIR /app
COPY . .
EXPOSE 3000

ENV NODE_ENV "production"
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
