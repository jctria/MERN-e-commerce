require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product'); 
const sampleProducts = require('./products');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        seedDatabase();
    })
    .catch(err => console.error('MongoDB connection error:', err));

async function seedDatabase() {
    try {
        await Product.deleteMany();
        const seeded = await Product.insertMany(sampleProducts);
        console.log('Seed data inserted:', seeded);
        mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
}