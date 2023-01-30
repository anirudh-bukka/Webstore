const express = require('express')
const router = express.Router()
const { getAllBrands, getOneBrand, getOneItem, addItem, updateItem, updateBrand, deleteItem, deleteBrand } = require('../controllers/tasks')

router.route('/').get(getAllBrands).post(addItem)
router.route('/:id').get(getOneItem).patch(updateItem).delete(deleteItem)
router.route('/:id').get(getOneBrand).patch(updateBrand).delete(deleteBrand)

module.exports = router