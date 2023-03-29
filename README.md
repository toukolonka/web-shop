# Web Shop App

### Getting started

```bash
docker-compose -f docker-compose.server.yml up
docker-compose -f docker-compose.client.yml up
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