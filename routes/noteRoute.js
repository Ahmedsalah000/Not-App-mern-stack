import express from "express";
import {addNote, getNotes,getNote,updateNote ,deleteNote} from "../services/noteService.js";

const router=express.Router();

router.route('/').get(getNotes).post(addNote)
router.route('/:id').get(getNote).put(updateNote).delete(deleteNote)


export default router 

