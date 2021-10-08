import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (req, res, cb) => {
    if (fileFilter.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cd(null, true);
    } else {
        cs({ message: 'Unsupported filetype' }, false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;


