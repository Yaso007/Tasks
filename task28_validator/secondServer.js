const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;
const cors = require('cors')
app.use(cors())

const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, 'uploads/');
},
filename: (req, file, cb) => {
const ext = file.originalname.split('.').pop();
const uniqueName = file.fieldname + '-' + Date.now() + '.' + ext;
cb(null, uniqueName);
}
});

const fileFilter = (req, file, cb) => {
if (file.mimetype === 'image/jpeg' ||
file.mimetype === 'image/png' ||
file.mimetype === 'image/jpg') {
cb(null, true);
} else {
cb(new Error('Only .jpg, .jpeg, and .png files are allowed!'), false);
}
};

const upload = multer({
storage: storage,
fileFilter: fileFilter,
limits: { fileSize: 2 * 1024 * 1024 }
});

app.post('/upload', upload.single('profilePic'), (req, res) => {
if (!req.file) {
return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
}

res.status(200).json({
message: 'File uploaded successfully',
filename: req.file.filename,
path: req.file.path
});
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});