const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
    // Set a static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    });
};

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
