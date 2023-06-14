// models/Comment.js
"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose"),
  commentSchema = new Schema(
    {
      comment: {
        type: String,
      },
      discussion: { type: mongoose.Schema.Types.ObjectId, ref: "Discussion" },
      author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      upVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      downVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("Comment", commentSchema);
