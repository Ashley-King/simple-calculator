const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('pages/index');
})

app.post('/', (req, res) => {
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let result = num1 + num2;
  res.render('pages/calculation', { 
    num1: num1,
    num2: num2,
    result: result 
  });
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})