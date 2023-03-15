const Products = require("../models/product.model")
const productQueries = require('../queries/product.queries')

const PAGE_SIZE = 6;
// call back functions separated from routes
// Read All
module.exports.getAllProducts =  async (req, res) => {
  const page = req.params.page ? parseInt(req.params.page) : 1;
  const offset = (page - 1) * PAGE_SIZE;

  try {
    const totalDocs = await Products.countDocuments();
    const totalPages = Math.ceil(totalDocs / PAGE_SIZE);

    const products = await Products.find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(PAGE_SIZE);

    res.json({ products, page, totalPages });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Find one
module.exports.findoneSingleProduct = (req, res) => {
  Products.findOne({ _id: req.params.id })
    .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//  Create
module.exports.createNewProduct = async (req, res) => {
  console.log(req.body, req.file)
  const product = {
    ...req.body,
    image: req.file
  }
  const newProduct = new Products(product);

  try {
    newProduct.validateSync();
    await newProduct.save()
    res.status(201).json({
      message: 'Product created successfully',
      product
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'Validation failed',
      errors: error.errors
    });
  }
}

// Update
module.exports.updateExistingProduct = (req, res) => {
  req.body = {
    ...req.body,
    image: req.file,
  }
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

// Get mainCategory and subCategories
module.exports.getCategories = (req, res) => {
  productQueries.getCategories()
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
};

// Get products by category or subcategory
module.exports.getByMainOrSubCategory = (req, res) => {
  const type = req.params.type;
  const name = req.params.name;

  if (type === 'category') {
    Products.find({ mainCategory: name })
      .then(products => {
        res.json(products);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } else if (type === 'subcategory') {
    Products.find({ subCategory: name })
      .then(products => {
        res.json(products);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } else {
    res.status(400).send('Invalid type parameter');
  }
}

// Search
module.exports.searchProducts = async (req, res) => {
  const { searchTerm } = req.params;
  const regex = new RegExp(searchTerm, 'i');
  try {
    const products = await Products.find({
      $or: [
        { 'name': regex },
        { 'brand': regex },
        { 'mainCategory': regex },
        { 'subCategory': regex },
      ]
    })

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};