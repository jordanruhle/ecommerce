const multer = require('multer');
const { S3 } = require("@aws-sdk/client-s3");
const multerS3 = require('multer-s3');

const myBucket = process.env.MY_S3_BUCKET_NAME;

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const date = Date.now()

const storage = multerS3({
  s3: s3,
  bucket: myBucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: function (req, file, cb) {
    cb(null, 'images/' + date + '_' + file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;