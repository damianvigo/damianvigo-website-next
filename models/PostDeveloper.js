import mongoose from 'mongoose';

const PostDeveloperSchema = new mongoose.Schema({
  /*  img: {
    type: String,
    required: [true, 'por favor ingrese la imagen'],
  }, */
  title: {
    type: String,
    required: [true, 'por favor ingrese el titulo'],
  },
  description: {
    type: String,
    required: [true, 'por favor ingrese la descripcion'],
  },
  postDeveloper: {
    type: String,
    required: [true, 'por favor ingrese el post'],
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
});

export default mongoose.models.Devpost ||
  mongoose.model('Devpost', PostDeveloperSchema);
