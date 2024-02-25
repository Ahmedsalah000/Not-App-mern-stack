import express from "express";
import {addNote, getNotes, deleteNote} from "../services/noteService.js";
const router=express.Router();

router.get('/' , async(req,res)=>{
    const notes=await getNotes();
    res.send(notes);
})
router.post('/' , async(req,res)=>{
    const note=await addNote(req.body.title,req.body.description);
    res.json(note);

})
router.delete('/:id' , async(req,res)=>{
    const note=await deleteNote(req.params.id);
    res.send(note);
})

export default router

