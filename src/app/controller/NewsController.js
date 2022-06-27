class NewsController {
    index(req, res) {
        res.render('news');
    }
    haha(req, res) {
        res.send('Hello world!');
    }
}

module.exports = new NewsController();
