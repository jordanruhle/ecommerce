const ProductController = require('../controllers/products.controller');

module.exports = app => {
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.findoneSingleProduct);
    app.post('/api/product', ProductController.createNewProduct);
    app.put('/api/product/:id', ProductController.updateExistingProduct);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}