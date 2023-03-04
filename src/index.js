const path = require ('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


//HTTP logger
app.use(morgan('combined'));

//Template engine 
// app.engine('handlebars' handlebars()) ^ typeerror handlebars is not a function
app.engine('hbs', handlebars.engine({ 
  defaultLayout: 'main',
  extname: '.hbs' 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');//render home thì nó lấy home.handlebars nó đưa vào {{{body}}} ở trang D:\nodejs\blog\src\resources\views\layouts\main.handlebars
})

app.get('/news', (req, res) => {
  res.render('news');
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});