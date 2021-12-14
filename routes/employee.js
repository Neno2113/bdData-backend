const { Router } = require("express");
const { getEmployees,storeEmployee, getEmployee, updateEmployee, deleteEmployee } = require("../controllers/Employee");


const router = Router();


router.get('/', getEmployees);
router.post('/', storeEmployee );
router.get('/:id', getEmployee );
router.put('/:id', updateEmployee );
router.delete('/:id', deleteEmployee);











module.exports = router;