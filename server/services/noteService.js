import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";

// Add a new note
export const addNote = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const note = await Note.create({ user: req.user._id, title, description });
  res.status(201).json({ data: note });
});

// Get notes with filtering and searching
export const getNotes = asyncHandler(async (req, res) => {
  const { fields, keyword, ...filterParams } = req.query;
  const userId = req.user._id;

  // Exclude special query parameters from filter
  const excludedFields = [ 'fields', 'keyword'];
  excludedFields.forEach(field => delete filterParams[field]);

  const filter = { ...filterParams };


  // Build query
  let query = Note.find({ user: userId, ...filter }).select('-__v -createdAt -updatedAt');

  // Limit fields
  if (fields) {
    const selectedFields =fields.split(',').join(' ');

    query = query.select(selectedFields);
  } else {
    query = query.select('-__v');
  }

  // Search
  if (keyword) {
    const regex = new RegExp(keyword, 'i');
    query = query.find({ $or: [{ title: regex }, { description: regex }] });
  }

  // Execute query
  const notes = await query;

  res.status(200).json({ data: notes });
});

 
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
