// controllers/productController.js

const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    res.json({message:"created",product });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ count:products.length,products });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { quantity: Number(number) } },
      { new: true }
    );
    res.json({ product, message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
