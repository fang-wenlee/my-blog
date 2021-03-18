import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ArticleSchema = new Schema({
    name: String,
    title:  String, // String is shorthand for {type: String}
    author: String,
    content: [],
    comment: [{ username: String, 
                 text: String}],
    upvotes: Number
  });