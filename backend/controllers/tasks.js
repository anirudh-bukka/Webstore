const Store = require('../models/Store')

const getAllBrands = (req, res) => {
    res.send('All Brands and their items')
}

const getOneBrand = (req, res) => {
    res.send('All Items of ${brand}')
}

const getOneItem = (req, res) => {
    // res.send('Get One item')
    res.json({ id: req.params.id })
}

const addItem = async (req, res) => {
    // res.send('Insert item')
    const product = await Store.create(req.body)
    res.status(201).json({ product })
}

const updateItem = (req, res) => {
    res.send('Update item')
}

const deleteItem = (req, res) => {
    res.send('Delete Item')
}

const deleteBrand = (req, res) => {
    res.send('Delete Brand')
}

module.exports = { getAllBrands, getOneBrand, getOneItem, addItem, updateItem, deleteItem, deleteBrand }