import mongoose from 'mongoose';

const letterSchema = new mongoose.Schema(
  {
    noSurat: { type: String, required: true, unique: true },
    kategoriSurat: { type: String, required: true },
    perihalSurat: { type: String, required: true },
    asalSurat: { type: String, required: true },
    tglDiterima: { type: Date, required: true },
    photoSurat: { type: String },
    kepada: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    tracker: [
      {
        currentPlace: String,
        status: { type: String, default: 'pending' },
        time: {
          type: Date,
          default: () => {
            Date.now();
          },
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Letter || mongoose.model('Letter', letterSchema);
