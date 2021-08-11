# Calm Cactus

Calm Cactus is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The production site is hosted at [calmcact.us](https://calmcact.us).

## Getting started

First install the project's dependencies with and disable Vercel's telemetry:

```
npm install
npx next telemetry disable
```

Run the development server with `npm run dev` and open [http://localhost:3000](http://localhost:3000) with your browser.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Building

Use [Docker](https://www.docker.com/) to build a release image and test it locally.

```
docker build . --tag calm_cactus_web
docker run -it -p 0.0.0.0:80:3000 calm_cactus_web:latest
```

The production site should then be available at [localhost](http://localhost).
