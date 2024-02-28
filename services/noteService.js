import asyncHandler from "express-async-handler";
import {getAll} from './handlersFactory.js';


import Note from "../models/noteModel.js";

export const addNote = asyncHandler(async (req, res) => {
  const note = await Note.create({
    title: req.body.title,
    description: req.body.description,
  });
  res.status(201).json({ data: note });
});

export const getNotes = getAll(Note);
export const getNote = asyncHandler(async (req, res) => {
    const note = await Note.findById({
    _id: req.params.id,
});
res.status(201).json({ data: note });
});

export const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      title: req.body.title,
      description: req.body.description,
    },
    {
      new: true,
    }
  );
  res.status(201).json({ data: note });
});
export const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndDelete({
    _id: req.params.id,
  });
  res.send(`${note.title} is deleted`);
});
