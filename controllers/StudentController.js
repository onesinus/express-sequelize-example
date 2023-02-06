const index = require('./../models/index');
const Student = index.Student;

class StudentController {
    static index(req, res) {
        Student
            .getData()
            .then(students => {
                res.render('students', {students, msg:undefined});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static add(req, res) {
        res.render('students/form', {data: {}});
    } 

    static save(req, res) {
        Student
            .saveData(req.body)
            .then(() => {
                return Student.getData()
            })
            .then(students => {
                res.render('students', {students, status: 'success', msg: "Data successfuly added"});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static edit(req, res) {
        Student
            .getDataEdit(req.params.id)
            .then(data => {
                res.render('students/form', {data});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        Student
            .updateData(req.body, req.params.id)
            .then(() => {
                return Student.getData()
            })
            .then(students => {
                res.render('students', {students, status: 'success', msg: "Data successfuly updated"});                
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete(req, res) {
        Student
            .deleteData(req.params.id)
            .then(() => {
                return Student.getData()
            })
            .then(students => {
                res.render('students', {students, status: 'success', msg: "Data successfuly deleted"});                
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = StudentController;