const OrderController = require('../controllers/order.controller');
const { check } = require('express-validator');


module.exports = app => {
    app.get('/order/:id', check('id').isMongoId(), OrderController.findoneSingleOrder);
    app.get('/api/order', OrderController.getAllOrders);
    app.post('/api/order', OrderController.createNewOrder);
    app.put('/api/order/:id', OrderController.updateExistingOrder);
    app.delete('/api/order/:id', OrderController.deleteAnExistingOrder);
}