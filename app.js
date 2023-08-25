import express from "express";

import { getNotes, getSingleNote, createNote } from "./database.js";

const app = express();

app.use(express.json());

const port = 8080;

app.get("/notes", async (req, res) => {
  const notes = await getNotes();
  res.json(notes);
});

app.get("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const note = await getSingleNote(id);
  res.json(note);
});

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  const newNote = await createNote(title, content);
  res.json(newNote);
});
app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
