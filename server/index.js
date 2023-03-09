const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let items = [
  {
    id: 1,
    name: 'PC'
  },
  {
    id: 2,
    name: 'Mac'
  }
];

app.get('/api/items', (_, response) => {
  response.json(items);
});

app.get('/api/items/:id', (request, response) => {
  const id = Number(request.params.id);
  const item = items.find(item => item.id === id);
  response.json(item);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});