const OrderController = require('../controllers/order.controller');


module.exports = app => {
    app.get('/api/order/:id', OrderController.findOneSingleOrder);
    app.get('/api/order', OrderController.getAllOrders);
    app.post('/api/order', OrderController.createNewOrder);
    app.put('/api/order/:id', OrderController.updateExistingOrder);
    app.delete('/api/order/:id', OrderController.deleteAnExistingOrder);
}