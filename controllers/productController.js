const Product = require('../models/Product');
const sampleProducts = require('../seeds/cities');

// Seed products
exports.seedProducts = async (req, res) => {
    console.log('Seeding products...');
    try {
        await Product.deleteMany(); // Careful with this in production
        const seeded = await Product.insertMany(sampleProducts);
        console.log('Seeding successful:', seeded);
        res.send(seeded);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const product = new Product({ name, description, price, imageUrl });
  const savedProduct = await product.save();
  res.status(201).json(savedProduct);
};
