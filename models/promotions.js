const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

//schema for promotions
const promotionSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image :{
        type:String,
        required:true
    },
    lable:{
        type:String,
        default:''
    },
    price:{
        type:String,
        required:true,
        min:0
    },
    description: {
        type: String,
        required: true
    },
    featured:{
         type:Boolean,
         default:false
    }
},{
        timestamps:true
});
// model for promotions
var Promotions = mongoose.model('Promotion',promotionSchema);

module.exports = Promotions;