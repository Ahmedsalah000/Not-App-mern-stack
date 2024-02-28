import mongoose from "mongoose";

const noteSchema= new mongoose.Schema({
    title:String,
    description:String,
    tag:String,
    date:Date,
    color:String,
    pinned:Boolean,
    archive:Boolean,
    trash:Boolean,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'SubCategory must be belong to parent category'],
    },
    

},
{
    timestamps:true
}
)
const Note=mongoose.model('Note',noteSchema)
export default Note