import express from 'express';
import cloudinary from '../configs/cloudinaryConfig.js';
import upload from '../multer.js';
import User from '../models/User.js';
import path from 'path';
// import dataUri from 'datauri';

const router = express.Router();
// const dUri = new dataUri();
router.post('/', upload.single('photo'), async (req, res) => {
    try {
        // Upload image to cloudinary
        // console.log('Request body: ', req);
        const result = await cloudinary.uploader.upload(
            req.files.photo.tempFilePath
        );
        // Create new user
        let user = new User({
            name: req.body.name,
            photo: result.secure_url,
            cloudinary_id: result.public_id,
        });
        // Save user
        await user.save();
        res.json(user);
    } catch (err) {
        console.log('Image upload error: ', err);
    }
});
export default router;
