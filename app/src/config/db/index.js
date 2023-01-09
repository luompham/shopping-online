const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://ivan:123@cluster0.qlls9x9.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected successfully!!!');
    } catch (error) {
        console.log('Connected unsuccessfully!!!');

    }

};


module.exports = { connect };
