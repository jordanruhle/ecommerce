const OrderController = require('../controllers/products.controller');
const upload = require('../config/multer.config')


module.exports = app => {
    app.get('/api/order', OrderController.getAllOrders);
    app.get('/api/order/:id', OrderController.findoneSingleOrder);
    app.post('/api/order',  upload.single('image'),  OrderController.createNewOrder);
    app.put('/api/order/:id', upload.single('image'), OrderController.updateExistingOrder);
    app.delete('/api/order/:id', OrderController.deleteAnExistingOrder);
}