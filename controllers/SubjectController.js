const index = require('./../models/index');
const Subject = index.Subject;

class StudentController {
    static index(req, res) {
        Subject
            .getData()
            .then(subjects => {
                res.render('subjects', {subjects, msg:undefined});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static add(req, res) {
        res.render('subjects/form', {data: {}});
    } 

    static save(req, res) {
        Subject
            .saveData(req.body)
            .then(() => {
                return Subject.getData()
            })
            .then(subjects => {
                res.render('subjects', {subjects, status: 'success', msg: "Data successfuly added"});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static edit(req, res) {
        Subject
            .getDataEdit(req.params.id)
            .then(data => {
                res.render('subjects/form', {data});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        Subject
            .updateData(req.body, req.params.id)
            .then(() => {
                return Subject.getData()
            })
            .then(subjects => {
                res.render('subjects', {subjects, status: 'success', msg: "Data successfuly updated"});                
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete(req, res) {
        Subject
            .deleteData(req.params.id)
            .then(() => {
                return Subject.getData()
            })
            .then(subjects => {
                res.render('subjects', {subjects, status: 'success', msg: "Data successfuly deleted"});                
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = StudentController;