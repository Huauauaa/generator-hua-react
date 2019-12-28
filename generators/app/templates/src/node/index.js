const express = require('express');

const app = express();
const router = express.Router();
const port = 3001;

const data = [
  {
    id: 0,
    name: 'Michael Jordan'
  },
  {
    id: 1,
    name: 'Kobe Bryant'
  },
  {
    id: 2,
    name: 'LeBron James'
  },
];

router.use('/data', (req, res) => {
  return res.json(data);
});
app.use('/', router);

app.listen(port, () => {
  console.log(`sever is running on ${port}`);
});
