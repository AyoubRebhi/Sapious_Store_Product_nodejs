const mongoose= require("mongoose");

const itemSchema=mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
    },
    category:{type: mongoose.Schema.Types.ObjectId, ref: "Category"}

});

module.exports =Item = mongoose.model("item ", itemSchema);
