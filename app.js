
const express = require('express');
const connectDB = require('./config_1/db');
var cors = require('cors');


const signup = require("./routes/api/signup");
const paid = require("./routes/api/paidInstallment");

const app = express();
const port = process.env.PORT || 8000;
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use("/signup",signup);
app.use("/paid",paid);

app.listen(port, () => console.log(`Server running on port ${port}`));