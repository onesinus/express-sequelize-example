const express   = require('express')
const router    = express.Router()

const SubjectController = require("./../controllers/SubjectController");
router.get('/', SubjectController.index);

router.get('/add', SubjectController.add);

router.post('/add', SubjectController.save);

router.get('/edit/:id', SubjectController.edit);

router.post('/edit/:id', SubjectController.update);


router.get('/delete/:id', SubjectController.delete);

module.exports = router;