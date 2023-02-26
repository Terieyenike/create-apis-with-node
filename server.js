const express = require('express');
const app = express();
const path = require('path');

const friendsRouter = require('./routes/friends.router');

const PORT = 4000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.get('/', (req, res) => {
  // res.send('welcome to the friends data response');
  res.sendFile(path.join(__dirname, 'public', 'images', 'teri.jpg'));
});

app.use('/friends', friendsRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
