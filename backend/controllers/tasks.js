const Store = require('../models/Store')
const asyncWrapper = require('../middleware/async')

/* Async wrapper is preferred since multiple try-catch becomes redundant. 
 */

const getAllBrands = asyncWrapper(async (req, res) => {
    // res.send('All Brands and their items')
    const products = await Store.find({})
    res.status(200).json({ products })
})

const getOneBrand = asyncWrapper(async (req, res) => {
    const { brandName } = req.body
    const product = await Store.findOne({ brandName })
    if(!product) {
        return res.status(404).json({ msg: `No Brand called: ${ brandName }` })
    }
    res.status(200).json({ product })
})

const getOneItem = asyncWrapper( async(req, res) => {
    // res.send('Get One item')
    // res.json({ id: req.params.id })
    const { itemName } = req.body
    const item = await Store.findOne({ itemName })
    if(!item) {
        return res.status(404).json({ msg: `No item called: ${ itemName }` })
    }
    res.status(200).json({ item })
})

const addItem = asyncWrapper( async (req, res) => {
    // res.send('Insert item')
    const product = await Store.create(req.body)
    res.status(201).json({ product })
})

const updateItem = asyncWrapper( async (req, res) => {
    const { itemName: itemName } = req.body
    const item = await Store.findOneAndUpdate({ itemName }, req.body, { new: true, runValidators: true })
    if(!item) {
        return res.status(404).json({ msg: `No item: ${ itemName } to update.` })
    }
    res.status(200).json({ itemName: itemName, data: req.body })
})

const updateBrand = asyncWrapper( async (req, res) => {
    const { brandName: brandName } = req.body
    const brand = await Store.findOneAndUpdate({ brandName }, req.body, { new: true, runValidators: true })
    if(!brand) {
        return res.status(404).json({ msg: `No brand: ${ brandName } to update.` })
    }
    res.status(200).json({ itemName: itemName, data: req.body })
})

const deleteItem = asyncWrapper( async (req, res) => {
    const { itemName: itemName } = req.body
    const item = await Store.findOneAndDelete({ itemName })
    if(!item) {
        res.status(404).json({ msg: `No item: ${itemName} to delete.` })
    }
    res.status(200).json({ itemName })
})

const deleteBrand = asyncWrapper( async (req, res) => {
    const { brandName: brandName } = req.params
    const brand = await Store.findOneAndDelete({ brandName })
    if(!brand) {
        res.status(404).json({ msg: `No brand: ${brandName} to delete.` })
    }
    res.status(200).json({ brandName })
})

module.exports = { getAllBrands, getOneBrand, getOneItem, addItem, updateItem, updateBrand, deleteItem, deleteBrand }