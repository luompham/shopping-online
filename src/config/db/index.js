const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/shopping_online');
        console.log('Connected successfully!!!');
    } catch (error) {
        console.log('Connected unsuccessfully!!!');

    }

};


module.exports = { connect };
