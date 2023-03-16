# Web Shop App

### Getting started

```bash
docker-compose up
```

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
cd test-playwright

npm install

npx playwright test pages
```

#### Lighthouse user flow tests

```bash
cd test-puppeteer

npm install

npm run test
```