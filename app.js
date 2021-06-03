const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
require('./startup/routes')(app);   //! routes
require('./startup/db')();       //! database
require('./startup/test');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));