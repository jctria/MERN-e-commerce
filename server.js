require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use Routes
app.use('/api', productRoutes);

// Serve client files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','dist','index.html'));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});