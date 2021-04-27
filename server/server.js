import express from 'express';
import products from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'
import dotenv from 'dotenv';


dotenv.config()

connectDB()

const app = express()

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 8080

app.listen(
    PORT, 
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)