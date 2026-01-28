import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Tough'],
      required: true
    },
    youtube: String,
    leetcode: String,
    article: String
  },
  { _id: false }
);

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    order: {
      type: Number,
      default: 0
    },
    problems: [problemSchema]
  },
  {
    timestamps: true
  }
);

const Topic = mongoose.model('Topic', topicSchema);
export default Topic;