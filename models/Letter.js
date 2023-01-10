import mongoose from 'mongoose';

const letterSchema = new mongoose.Schema(
  {
    noSurat: { type: String, required: true, unique: true },
    kategori: { type: String, required: true },
    asalSurat: { type: String, required: true },
    keterangan: { type: String, required: true },
    tglSurat: { type: Date, required: true },
    tglDiterima: { type: Date, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Letter || mongoose.model('Letter', letterSchema);
