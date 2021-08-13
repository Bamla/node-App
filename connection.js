const mongoose = require('mongoose');

const connectToDB = async () =>
 mongoose.connect(process.env.DATABSE_ACCESS, { 
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true, 
});

module.exports = connectToDB;