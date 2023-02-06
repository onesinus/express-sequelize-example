const index = require('./../models/index');
const Teacher = index.Teacher;

class TeacherController {
    static index(req, res) {
        Teacher
            .getData()
            .then(Teachers => {
                res.render('teachers', {Teachers, msg:undefined});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static add(req, res) {
        res.render('teachers/form', {data: {}});
    } 

    static save(req, res) {
        Teacher
            .saveData(req.body)
            .then(() => {
                return Teacher.getData()
            })
            .then(Teachers => {
                res.render('teachers', {Teachers, status: 'success', msg: "Data successfuly added"});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static edit(req, res) {
        Teacher
            .getDataEdit(req.params.id)
            .then(data => {
                res.render('teachers/form', {data});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        Teacher
            .updateData(req.body, req.params.id)
            .then(() => {
                return Teacher.getData()
            })
            .then(Teachers => {
                res.render('teachers', {Teachers, status: 'success', msg: "Data successfuly updated"});                
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete(req, res) {
        Teacher
            .deleteData(req.params.id)
            .then(() => {
                return Teacher.getData()
            })
            .then(Teachers => {
                res.render('teachers', {Teachers, status: 'success', msg: "Data successfuly deleted"});                
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = TeacherController;