const mongoose =require("mongoose");
const { string } = require("zod");
// mongodb+srv://SAMARJEET:Pass@0987@cluster0.vrbhe.mongodb.net/
mongoose.connect("mongodb+srv://SAMARJEET:Pass%400987@cluster0.vrbhe.mongodb.net/")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}