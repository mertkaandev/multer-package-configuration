**Multer**

Multer package is a package that allows uploading photos or files. Usually used for uploading photos. It receives the file sent by the client and sends it to the file in a certain path. File uploads are limited to one or a maximum of 12. It has functions that distinguish them from each other. See Multer documentation for more. Multer is downloaded to apps with this command:

`npm install multer --save`

**File Structure**

1. `index.js`: This file is the main file. In addition to the classic server setup processes, the path of the static files is specified. This is done thanks to the middleware of Express.js. First the package "path" is included, then the path of the static files is specified using "app.use()".

`const path = require("path");`

app.use(express.static(path.join(__dirname, "public")));

2. `multer_config.js`: Multer is the file where the configuration is made. It has two basic variables named "storage" and "fileFilter". Operations were made on these variables. "storage" has information including the path to save the photo. "fileFilter" contains the information of the photo extensions to be allowed. Finally, these two variables were exported by assigning them to the "profileImageUpload" variable, thanks to the multer() method.

**Usage**

Imagine you have an endpoint named `/profile/upload`. `profileImageUpload` should work when you navigate to this endpoint. The `.single("")` method should be used as it will upload a single photo while working. Then you can run a controller like called "upload". At the end of the day, you will have a structure like this in the Express.js project:

```
const express = require("express");
const {profileImageUpload} = require("your_file_path");
const {upload} = require("your_file_path");
const router = express.Router();

router.post('/profile/upload', profileImageUpload.single("profile_image"), upload);

module.exports = router;

```
