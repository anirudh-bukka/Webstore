const express = require('express')
const router = express.Router()
const { getAllBrands, getOneBrand, getOneItem, addItem, updateItem, updateBrand, deleteItem, deleteBrand } = require('../controllers/tasks')

router.route('/').get(getAllBrands).post(addItem)
router.route('/:brandName').get(getOneBrand).patch(updateBrand).delete(deleteBrand)
router.route('/:brandName/:itemName').get(getOneItem).patch(updateItem).delete(deleteItem)

module.exports = router