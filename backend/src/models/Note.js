import mongoose from "mongoose";

//  1st step: YOu need to create a schema
//  2nd step: You would create a model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requried: true,
    },
    content: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }, //createdAt, updatedAT
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
