const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes'); //gõ thư mục thì nó sẽ tự động nạp file index

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));
//Template engine
// app.engine('handlebars' handlebars()) ^ typeerror handlebars is not a function
app.engine(
                    'hbs',
    handlebars.engine({
                        defaultLayout: 'main',
                extname: '.hbs',
    }),
);
        app.set('view engine', 'hbs');
                    app.set('views', path.join(__dirname, 'resources/views'));

//Home, Search, contact.... là những trang không nằm ở những tài nguyên cụ thể -> cho vào siteController

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
