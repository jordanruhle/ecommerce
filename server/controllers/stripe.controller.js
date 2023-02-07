


// PAYMENT
module.exports.payment = (req, res) => {
    const path = resolve(process.env.STATIC_DIR + "/index.html")
}

// CONFIG
module.exports.config = (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
};

// CREATE PAYMENT INTENT
module.exports.createPaymentIntent = async (req, res) => {};
