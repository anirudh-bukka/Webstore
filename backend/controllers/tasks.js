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
    const { id: brandId } = req.params
    const product = await Store.findOne({ _id: brandId })
    if(!product) {
        return res.status(404).json({ msg: `No Brand with id: ${ brandId }` })
    }
    res.status(200).json({ product })
})

const getOneItem = asyncWrapper( async(req, res) => {
    // res.send('Get One item')
    // res.json({ id: req.params.id })
    const { id: itemId } = req.params
    const item = await Store.findOne({ _id: itemId })
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
    const { id: itemId } = req.params
    const item = await Store.findOneAndUpdate({ _id: itemId }, req.body, { new: true, runValidators: true })
    if(!item) {
        return res.status(404).json({ msg: `No item: ${ itemName } to update.` })
    }
    res.status(200).json({ id: itemId, data: req.body })
})

const updateBrand = asyncWrapper( async (req, res) => {
    const { id: brandId } = req.params
    const brand = await Store.findOneAndUpdate({ _id: brandId }, req.body, { new: true, runValidators: true })
    if(!brand) {
        return res.status(404).json({ msg: `No brand: ${ brandName } to update.` })
    }
    res.status(200).json({ id: brandId, data: req.body })
})

const deleteItem = asyncWrapper( async (req, res) => {
    const { id: itemId } = req.params
    const item = await Store.findOneAndDelete({ _id: itemId })
    if(!item) {
        return res.status(404).json({ msg: `No item: ${itemId} to delete.` })
    }
    res.status(200).json({ itemId })
})

const deleteBrand = asyncWrapper( async (req, res) => {
    const { id: brandId } = req.params
    const brand = await Store.findOneAndDelete({ _id: brandId })
    if(!brand) {
        return res.status(404).json({ msg: `No brand: ${brandId} to delete.` })
    }
    res.status(200).json({ brandId })
})

module.exports = { getAllBrands, getOneBrand, getOneItem, addItem, updateItem, updateBrand, deleteItem, deleteBrand }