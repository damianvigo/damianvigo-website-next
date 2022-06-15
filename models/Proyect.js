import mongoose from 'mongoose';

const ProyectSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, 'por favor ingrese el titulo'],
  },
  title: {
    type: String,
    required: [true, 'por favor ingrese el titulo'],
  },
  description: {
    type: String,
    required: [true, 'por favor ingrese la descripcion'],
  },
  technologies: {
    type: Array,
    required: [true, 'por favor ingrese la tecnologia'],
  },
  github: {
    type: String,
    required: [true, 'por favor ingrese el link'],
  },
});

export default mongoose.models.Proyect ||
  mongoose.model('Proyect', ProyectSchema);
