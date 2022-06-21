import mongoose from 'mongoose';

const PostsSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, 'por favor ingrese la imagen'],
  },
  title: {
    type: String,
    required: [true, 'por favor ingrese el titulo'],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

export default mongoose.models.Post || mongoose.model('Post', PostsSchema);
