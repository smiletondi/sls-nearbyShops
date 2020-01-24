const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const MONGODB_URL = "mongodb+srv://hiddenfounder:hiddenfounder@cluster0-jkzll.gcp.mongodb.net/test?retryWrites=true&w=majority";

module.exports = async (req, res, next) => {
    let isConnected;
    if (isConnected) {
        console.log('using existing database connection');
        return Promise.resolve();
    }

    console.log('using new database connection');
    const database = await mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true
    });
    isConnected = database.connections[0].readyState;
    console.log(isConnected);
};