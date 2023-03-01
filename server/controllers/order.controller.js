const Orders = require("../models/order.model")


// call back functions separated from routes
// Read All
module.exports.getAllOrders = (req, res) => {
    Orders.find()
        .then(allOrders => res.json({order: allOrders} ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Find one
module.exports.findOneSingleOrder = (req, res) => {
    Orders.find()
    .then(allOrders => res.json({order: allOrders} ))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
    // const id = req.params.id;
    // console.log(id)
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.json({ message: id });
    // }
    // Orders.find(req.params.id)
    //     .then(oneSingleOrder => res.json({ order: oneSingleOrder }))
    //     .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//  Create
module.exports.createNewOrder = (req, res) => {
    console.log(req.body)
    Orders.create(req.body)
        .then(newlyCreatedOrder => res.json({ order: newlyCreatedOrder }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

// Update
module.exports.updateExistingOrder = (req, res) => {
    Orders.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedOrder => res.json({ order: updatedOrder }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

// Delete
module.exports.deleteAnExistingOrder = (req, res) => {
    Orders.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}