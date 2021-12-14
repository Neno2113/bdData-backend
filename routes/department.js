const { Router } = require("express");
const { getDepartments,storeDepartment, getDepartment, updateDepartment, deleteDepartment } = require("../controllers/Department");


const router = Router();


router.get('/', getDepartments);
router.post('/', storeDepartment );
router.get('/:id', getDepartment );
router.put('/:id', updateDepartment );
router.delete('/:id', deleteDepartment);











module.exports = router;