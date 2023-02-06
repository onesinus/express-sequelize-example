const express   = require('express')
const router    = express.Router()

const StudentController = require("./../controllers/StudentController");
router.get('/', StudentController.index);

router.get('/add', StudentController.add);

router.post('/add', StudentController.save);

router.get('/edit/:id', StudentController.edit);

router.post('/edit/:id', StudentController.update);


router.get('/delete/:id', StudentController.delete);

module.exports = router;