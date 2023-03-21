const Orders = require("../models/order.model");
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');


const PAGE_SIZE = 9;

// Read All
module.exports.getAllOrders = async (req, res) => {
    const page = req.params.page ? parseInt(req.params.page) : 1;
    const offset = (page -1) * PAGE_SIZE;

    try {
        const totalDocs = await Orders.countDocuments();
        const totalPages = Math.ceil(totalDocs / PAGE_SIZE);

        const orders = await Orders.find()
            .sort({ createdAt: -1})
            .skip(offset)
            .limit(PAGE_SIZE);

        res.json({ orders, page, totalPages });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
};

// Find one
module.exports.findoneSingleOrder = (req, res) => {
    console.log("find one")
    const id = req.params.id
    console.log(id)
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        console.log(`Invalid id parameter: ${req.params.id}`);
        return res.status(400).json({ message: 'Invalid id parameter' });
    }

    Orders.findOne({ _id: req.params.id })
        .then(oneSingleOrder => {
            if (!oneSingleOrder) {
                console.log(`Order with id ${req.params.id} not found`);
                return res.status(404).json({ message: 'Order not found' });
            }
            console.log(`Found order with id ${req.params.id}:`, oneSingleOrder);
            res.json({ order: oneSingleOrder });
        })
        .catch(err => {
            console.log(`Error finding order with id ${req.params.id}:`, err);
            res.status(500).json({ message: 'Something went wrong', error: err });
        });
}

//  Create
module.exports.createNewOrder = async (req, res) => {
    console.log(req.body)
    try {
        const newOrder = await new Orders(req.body).save()
        res.status(201).json({ message: "order created", orderId: newOrder._id })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' })
    }
}

// Update
module.exports.updateExistingOrder = async (req, res, next) => {
    try {
        console.log(req.body);
        const { status } = req.body;
        const { id } = req.params
        console.log(id)
        const updatedOrder = await Orders.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        )
        res.status(200).json(updatedOrder)
    } catch (err) {
        next(err)
    }
}

// Delete
module.exports.deleteAnExistingOrder = (req, res) => {
    Orders.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Search
module.exports.searchOrders = async (req, res) => {
    console.log("Order Search");
    const { searchTerm, page } = req.params;
    const offset = (page -1) * PAGE_SIZE;
    
    const regex = new RegExp(searchTerm, 'i');
    const searchAttributes = [
                { 'billing.email': regex },
                { 'billing.firstName': regex },
                { 'billing.lastName': regex },
                { 'billing.company': regex },
                { 'billing.address': regex },
                { 'billing.phone': regex },
                { 'shipping.firstName': regex },
                { 'shipping.lastName': regex },
                { 'shipping.company': regex },
                { 'shipping.address': regex },
                { 'status': regex },
                { 'products': regex },
                { 'deliveryMethod': regex }
            ]
    try {
        const totalDocs = await Orders.find({$or: searchAttributes}).countDocuments();
        const totalPages = Math.ceil(totalDocs / PAGE_SIZE);

        const orders = await Orders.find({ $or: searchAttributes})
            .sort({ createdAt: -1})
            .skip(offset)
            .limit(PAGE_SIZE);

        res.json({ orders, page, totalPages });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};