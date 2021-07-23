const mongoose = require('mongoose');
function _connect(){
    const URI = process.env.MONGO_HOST
    mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
        .then(
            () => {
                console.log("connection db ready to use", process.env.PORT)

            },
            (err)=>{
                console.log("connection db failed", err)
            }
        )
}

module.exports = _connect;