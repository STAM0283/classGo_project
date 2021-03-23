const express = require('express');

const app = express();
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const bodyParser = require('body-parser');
const routerCategory = require('./routes/category');
const routerArticle = require('./routes/articles');
const routerImage = require('./routes/images');
const routerNewsletters = require('./routes/newsletters');
const routerContact = require('./routes/contact');
const routerSignUp = require('./routes/signUp');
const routerSignIn = require('./routes/signIn');
const routerUser = require('./routes/user');
const routerComment = require('./routes/comments');
const routerShoppingbasket = require('./routes/shoppingbasket');
const routerAllArticles = require('./routes/allArticles');
const routerAdminConnexion = require('./routes/admin');
const routerAddImage = require('./routes/addDeleteImages');

const PORT = 5000 || process.env.PORT;

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 30,
});
app.use(limiter);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routerCategory);
app.use('/', routerArticle);
app.use('/', routerImage);
app.use('/', routerNewsletters);
app.use('/', routerContact);
app.use('/', routerSignUp);
app.use('/', routerSignIn);
app.use('/', routerUser);
app.use('/', routerComment);
app.use('/', routerShoppingbasket);
app.use('/', routerAllArticles);
app.use('/', routerAdminConnexion);
app.use('/', routerAddImage);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server was lisned at port : ${PORT}`);
});
