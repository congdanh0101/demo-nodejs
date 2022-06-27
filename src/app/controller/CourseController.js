const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        console.log(req.params.slug)
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                // res.json(course);
                // console.log(course)
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
        // res.send('Course detail ' + req.params.slug);
    }
    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        console.log(req.body.videoID)
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect(`/`))
            .catch(error => {

            })

    }

    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course : mongooseToObject(course)
        }))
        .catch(next)
    }
    update(req,res,next){
        Course.updateOne({_id : req.params.id},req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
    }
    delete(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
}

module.exports = new CourseController();
