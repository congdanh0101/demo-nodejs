const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        // Course.find({},function(err,courses){
        //     if(!err)res.json(courses)
        //     else next(err)
        // })

        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render('home')
    }
    search(req, res) {
        res.send('Search');
    }
}

module.exports = new SiteController();
