import express from 'express';

const app = express();
const port = 5000;

app.use(express.json({ limit: '500kb' }));
app.use(express.urlencoded({ limit: '500kb', extended: true }));

app.get('/', (req, res) => {
  res.status(200);
});

app.listen(port, (err) => {
  if (err) throw new Error();
  console.log(`listening on port ${port}`);
});
