const express = require('express')
const router = express.Router()
const { getAllBrands, getOneBrand, getOneItem, addItem, updateItem, deleteItem, deleteBrand } = require('../controllers/tasks')

router.route('/').get(getAllBrands)
router.route('/:brandId').get(getOneBrand).delete(deleteBrand)
router.route('/:brandId/:itemId').get(getOneItem).patch(updateItem).delete(deleteItem).post(addItem)

module.exports = router