const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');//render home thì nó lấy home.handlebars nó đưa vào {{{body}}} ở trang D:\nodejs\blog\src\resources\views\layouts\main.handlebars
    // })
    //route sẽ đưa vào file /routes/news.js
    //function handler đưa vào /app/controllers/NewsController.js
    // app.get('/news', (req, res) => {
    //     // console.log(req.query.q);
    //     res.render('news');
    // })
    // app.use('/search', siteRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
