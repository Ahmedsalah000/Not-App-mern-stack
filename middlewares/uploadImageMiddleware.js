import multer from 'multer';
import ApiError from '../utils/apiError.js';

const multerOptions = () => {

    const multerStorage = multer.memoryStorage();

    const multerFilter = function (req, file, cb) {
        if (file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(new ApiError('Only Images allowed', 400), false);
        }
    };

    const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

    return upload;
};

export const uploadSingleImage = (fieldName) => multerOptions().single(fieldName);

export const uploadMixOfImages = (arrayOfFields) =>multerOptions().fields(arrayOfFields);
    