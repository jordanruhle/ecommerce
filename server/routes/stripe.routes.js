const StripeController = require('../controllers/stripe.controller');


module.exports = app => {
    app.get("/stripe/payment", StripeController.payment);
    app.get("/stripe/config", StripeController.config);
    app.post('/stripe/charge', StripeController.createPaymentIntent);
}
