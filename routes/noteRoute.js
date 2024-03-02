import express from "express";
import {addNote, getNotes,getNote,updateNote ,deleteNote} from "../services/noteService.js";
import {protect,allowedTo} from '../services/authService.js'

const router=express.Router();

router.route('/').get(protect,allowedTo('user'),getNotes).post(protect,allowedTo('user'),addNote)
router.route('/:id').get(protect,allowedTo('user'),getNote).put(protect,allowedTo('user'),updateNote).delete(protect,allowedTo('user'),deleteNote)


export default router 

