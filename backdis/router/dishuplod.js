const express = require('express');
const router = express.Router();
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        // Customize filename (optional)
        cb(null, file.originalname); // Keep original file name
    }
});

const fileFilter = (req, file, cb) => {
    // Check file type, for example allow only images
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('File type not supported'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Route for file upload
router.post('/upload', upload.single('images'), (req, res) => {
    console.log(req.file); // Log the file info for debugging
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    console.log(imageUrl); // Log the generated image URL
    res.json({ imageUrl });
});

module.exports = router;
