import mongoose from 'mongoose';

const letterSchema = new mongoose.Schema(
  {
    noSurat: { type: String, required: true, unique: true },
    kategoriSurat: { type: String, required: true },
    perihalSurat: { type: String, required: true },
    asalSurat: { type: String, required: true },
    tglDiterima: { type: Date, required: true },
    photoSurat: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Letter || mongoose.model('Letter', letterSchema);
