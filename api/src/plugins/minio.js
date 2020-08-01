const m = require('minio');
require('dotenv').config();

var mc = new m.Client({
    endPoint: process.env.MINIO_URL, // url
    port: parseInt(process.env.MINIO_PORT),
    useSSL: true,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});

// var buffer = "";
// var file = Buffer.from(buffer, 'hex');

console.log(mc);

var fileName = "icon.png";
var fileLocation = `./${fileName}`;
var bucketNameInput = "dogg"

const uploadFile = async () => {
    
    await mc.makeBucket(bucketNameInput.toString(), 'us-east-1', (err) => {
        if (err) return console.log(err);
        console.log('bucket created successfully');
    });
    
    var metadata = {
        'Content-Type': 'application/octet-stream',
        'X-Amz-Meta-Testing': 1234,
        'example': 5678
    };
    
    // Using fPutObject API upload your file to the bucket europetrip.
    await mc.fPutObject(bucketNameInput, fileName, fileLocation, metadata, (err, etag) => {
      if (err) return console.log(err)
      console.log('File uploaded successfully.');
      console.log(etag);
    });
}

uploadFile();