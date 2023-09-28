import multer from 'multer'


let storage = multer.memoryStorage()


export const singleUpload = multer({
    storage,
}).single("file")