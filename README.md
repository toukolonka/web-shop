# Web Shop App

### Getting started

```bash
docker-compose -f docker-compose.server.yml up
docker-compose -f docker-compose.client.yml up
```

#### Apps

1. React (http://localhost:3000)
2. React optimized (http://localhost:3001)
3. Preact (http://localhost:3002)
4. Preact optimized (http://localhost:3003)
5. Next React (http://localhost:3004)
6. Astro React (http://localhost:3005)
7. Next Preact(http://localhost:3006)
8. Astro Preact (http://localhost:3007)
9. Qwik City (http://localhost:3008)
10. SolidStart (http://localhost:3009)
11. Astro Solid (http://localhost:3010)

#### Server API (development)

```bash
cd server

npm install

npm run dev
```

#### Client (development)

```bash
cd react

npm install

npm run dev
```

#### Lighthouse performance tests

```bash
cd test-lighthouse

npm install

npm run test
```

#### Lighthouse user flow tests

```bash
cd test-puppeteer

npm install

npm run test
```