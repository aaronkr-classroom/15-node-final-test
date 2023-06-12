// models/Comment.js
"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose"),
  commentSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
      upVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      downVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("Comment", commentSchema);
