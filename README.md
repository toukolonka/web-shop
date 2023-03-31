# Web Shop App

### Getting started

```bash
docker-compose -f docker-compose.server.yml up
docker-compose -f docker-compose.client.yml up
```

#### Apps

1. react (http://localhost:3000)
2. react optimized (http://localhost:3001)
3. preact (http://localhost:3002)
4. preact optimized (http://localhost:3003)
5. next react (http://localhost:3004)
6. astro react (http://localhost:3005)
7. next preact(http://localhost:3006)
8. astro preact (http://localhost:3007)
9. qwik (http://localhost:3008)

#### Server (development)

```bash
cd server

npm install

npm run dev
```

#### Client (development)

```bash
cd react-client

npm install

npm run dev
```

#### Lighthouse performance tests

```bash
cd test-lighthouse

npm install

npm run test testName
```

#### Lighthouse user flow tests

```bash
cd test-puppeteer

npm install

npm run test
```