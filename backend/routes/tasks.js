const express = require('express')
const router = express.Router()
const { getAllBrands, getOneBrand, getOneItem, addItem, updateItem, updateBrand, deleteItem, deleteBrand } = require('../controllers/tasks')

router.route('/').get(getAllBrands).post(addItem)
router.route('/:id').get(getOneItem).put(updateItem).delete(deleteItem)
router.route('/:id').get(getOneBrand).delete(deleteBrand)

module.exports = router