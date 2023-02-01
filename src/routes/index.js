const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // route
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
    // Local host --- Hosting

    // Action ---> Dispatcher ---> Function handler
}

module.exports = route;
