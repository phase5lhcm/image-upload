import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    photo: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
    profile: {
        type: String,
    },
});

export default mongoose.model('User', userSchema);
