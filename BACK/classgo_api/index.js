const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routerCategory = require('./routes/category');
const routerArticle = require('./routes/articles');

const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routerCategory);
app.use('/', routerArticle);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server was lisned at port : ${PORT}`);
});
