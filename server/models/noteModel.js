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
        required: [true,'Note must belong to a user'],
    },
    

},
{
    timestamps:true
}
);
noteSchema.pre(/^find/,function(next){
    this.populate({
        path:'user',select:('name -_id')
    })
    next()
})

const Note=mongoose.model('Note',noteSchema)
<<<<<<< HEAD:server/models/noteModel.js
export default Note
=======
export default Note
>>>>>>> ef7ffaabf86478842ef49f9f492ca65c470bdda9:models/noteModel.js
