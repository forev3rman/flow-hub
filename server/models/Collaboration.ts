import mongoose from 'mongoose';

const collaborationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References User model
});

export default mongoose.model('Collaboration', collaborationSchema);