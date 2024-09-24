const products = require("../Models/productModels")


module.exports.getProducts = async (req, res) => {
    const AllProducts = await products.find()
    res.json({ AllProducts })
}
module.exports.addProduct = async (req, res) => {
    const newProducts = await products.create(req.body)
    res.json(newProducts)

}
module.exports.updateProducts = async (req, res) => {
    const Id = req.params.id
    const updateProducts = await products.updateOne({ id: Id }, { $set: req.body }, { new: true })
    res.json(updateProducts)
}
module.exports.deleteProducts = async (req, res) => {
    const Id = req.params.id
    const dtProduct = await products.deleteOne({ id: Id })
    res.json(dtProduct)
}