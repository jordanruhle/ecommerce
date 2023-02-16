const ProductController = require('../controllers/products.controller');
const upload = require('../config/multer.config')

module.exports = app => {
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.findoneSingleProduct);
    app.post('/api/product',  upload.single('image'),  ProductController.createNewProduct);
    app.put('/api/product/:id', upload.single('image'), ProductController.updateExistingProduct);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}