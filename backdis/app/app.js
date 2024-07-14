// app.js

const express = require('express');
const connectDB = require('../modules/connection'); // Adjust the path as needed
const app = express();
const port = 3000;
require('../modules/connection').connect();

const dishupl=require('../router/dishuplod')
const dish=require('../router/dishes');
const toggle=require('../router/toggle');
const cors=require('cors');



// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/dish', dishupl);
app.use('/api/dishupload',dish);
app.use('/api/dishreuired',toggle);
app.use('/uploads', express.static('uploads'));

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
