const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/komentarDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Schema Komentar
const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number
});

const Comment = mongoose.model('Comment', commentSchema);

// Route untuk menambah komentar
app.post('/api/comments', async (req, res) => {
  try {
    const { name, comment, rating } = req.body;
    const newComment = new Comment({ name, comment, rating });
    await newComment.save();
    res.status(201).json({ message: 'Komentar berhasil ditambahkan!' });
  } catch (error) {
    res.status(500).json({ error: 'Gagal menambahkan komentar' });
  }
});

// Route untuk mendapatkan semua komentar
app.get('/api/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil komentar' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
