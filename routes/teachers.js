const express   = require('express')
const router    = express.Router()

const TeacherController = require("./../controllers/TeacherController");
router.get('/', TeacherController.index);

router.get('/add', TeacherController.add);

router.post('/add', TeacherController.save);

router.get('/edit/:id', TeacherController.edit);

router.post('/edit/:id', TeacherController.update);


router.get('/delete/:id', TeacherController.delete);

module.exports = router;