const Product = require('../models/product.model');

exports.getCategories = () => {
  return Product.aggregate([
    {
      $group: {
        _id: "$mainCategory",
        subcategories: { $addToSet: "$subCategory" }
      }
    },
    {
      $project: {
        category: "$_id",
        subcategories: 1,
        _id: 0
      }
    }
  ]).exec();
};
