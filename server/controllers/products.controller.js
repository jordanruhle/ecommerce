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
module.exports.createNewProduct =  (req, res) => {
    console.log(req.body, req.file)
    const newProduct = new Products({
      name: req.body.name,
      brand: req.body.brand,
      description: req.body.description,
      mainCategory: req.body.mainCategory,
      subCategory: req.body.subCategory,
      price: req.body.price,
      quantity: req.body.quantity,
      color: req.body.color,
      size: req.body.size,
      image: req.file
    });
  
    newProduct.save((err, product) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(201).json({
        message: 'Product created successfully',
        product
      });
    });
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
