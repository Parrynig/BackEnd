const { Schema, model} = require ('../connection');

const mySchema = new Schema({
    title : String,
    image : String,
    user : String ,
    likes : {type :Number, default :0},
    shares : {type :Number, default :0}
});

module.exports = model ('blog', mySchema);