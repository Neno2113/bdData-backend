const { Router } = require("express");
const { getStudys,storeStudy, getStudy, updateStudy, deleteStudy } = require("../controllers/Study");


const router = Router();


router.get('/', getStudys);
router.post('/', storeStudy );
router.get('/:id', getStudy );
router.put('/:id', updateStudy );
router.delete('/:id', deleteStudy);











module.exports = router;