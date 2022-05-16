// "multer" and "path" package was included.

const multer = require("multer");
const path = require("path");

// storage

const storage = multer.diskStorage({
    destionation: function(req, file, cb) {
      
         const rootDir = path.dirname(require.main.filename);
         cb(null, path.join(rootDir, "public/uploads"));
    
    },

    filename: function(req, file, cb) {
           
          const extension = file.mimetype.split("/")[1];
          req.savedProfileImage = "image_" + req.user.id + "." + extension;
          cb(null, req.savedProfileImage)
         
    }
});

// fileFilter

const fileFilter = (req, file, cb) => {
    let allowedMimeTypes = ["image/jpg", "image/gif", "image/jpeg", "image/png"]

    if(!allowedMimeTypes.includes(file.mimetype)){
        return cb("Please provide a valid image file.")
    }
    return cb(null, true);
};

// profileImageUpload

const profileImageUpload = multer({storage, fileFilter});

module.exports = {profileImageUpload}