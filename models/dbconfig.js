const mongoose = require("mongoose")

exports.dbconnection = async () => {
    try {
       mongoose.connect(process.env.MONGO_URL);
       
       console.log("Connection Established");

        
       
    } catch (err) {
        console.log(err.message);
    }
}