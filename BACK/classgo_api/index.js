const express = require('express');
// const rateLimit = require('express-rate-limit');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routerCategory = require('./routes/category');
const routerArticle = require('./routes/articles');
const routerImage = require('./routes/images');
const routerNewsletters = require('./routes/newsletters');

const PORT = 5000 || process.env.PORT;

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization',
//   );
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   next();
// });

// const limiter = rateLimit({
//   windowMs: 3 * 60 * 1000,
//   max: 30, // per IP
// });
// app.use(limiter);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routerCategory);
app.use('/', routerArticle);
app.use('/', routerImage);
app.use('/', routerNewsletters);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server was lisned at port : ${PORT}`);
});
