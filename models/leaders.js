const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

const leaderSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image :{
        type:String,
        required:true
    },
    abbr:{
        type: String,
        required: true
    },
    designation:{
        type:String,
        required: true
    },
    featured:{
         type:Boolean,
         default:false
    }
},{
        timestamps:true
});
// model for dishes
var Leaders = mongoose.model('Leaders',leaderSchema);

module.exports = Leaders;