// Import the Express module and third-party middleware
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

//Integrate third-party middleware:
app.use(morgan('dev'));//logger middleware

//body parser middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Set up basic routes:
//root
app.get('/', (req, res ) => {
    res.send( 'Welcome to the Express Server!');
});

//about
app.get('/about', (req, res) => {
    res.send('This server is set up to demonstrate middleware integration.');
});


// non-existence routes
app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist.')
});

// Listen on a specified port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


