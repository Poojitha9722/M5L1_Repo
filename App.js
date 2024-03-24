
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware'); // Import the middleware function

const app = express();

// Use the middleware function for all routes
app.use(loggerMiddleware);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
