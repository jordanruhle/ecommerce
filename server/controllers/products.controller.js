const Products = require("../models/product.model")


// call back functions separated from routes
// Read All
module.exports.getAllProducts = (req, res) => {
    Products.find()
        .then(allProducts => res.json({product: allProducts} ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Find one
module.exports.findoneSingleProduct = (req, res) => {
    Products.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//  Create
module.exports.createNewProduct = (req, res) => {
    console.log(req.body)
    Products.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Update
module.exports.updateExistingProduct = (req, res) => {
    Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Delete
module.exports.deleteAnExistingProduct = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
