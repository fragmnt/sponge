require('dotenv').config();
const env = process.env;
const ffy = require('fastify')({ logger: true });
const mc = ffy.minio();

var bucket = "product-photos";
var policy = `{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "s3:ListMultipartUploadParts",
          "s3:GetBucketLocation",
          "s3:GetObject",
          "s3:HeadBucket",
          "s3:ListAllMyBuckets",
          "s3:ListBucket"
        ],
        "Resource": [
          "arn:aws:s3:::*"
        ]
      }
    ]
}`;

const uploadProductPhotoFromBuffer = async (imageBuffer, fileName) => {
        // var buffer = "";
        // var file = Buffer.from(buffer, 'hex');
        
        var fileStream = imageBuffer;
        var metadata = {
            'X-Storefront-Name': fileName,
            'Content-Type': 'application/octet-stream'
        };

        await mc.makeBucket(bucket, 'us-east-1', (err) => {
            if (err) return console.log(err);
            console.log('bucket created successfully');
        });
         // make publically available to view by configuring bucket settings
        await mc.setBucketPolicy(bucket, JSON.stringify(policy), function(err) {
            if (err) throw err;
            console.log('Bucket policy set');
        });
        
         // and getting url from object
        // const _,etag 
        var productPhotoUrl;
        await mc.putObject(bucket, fileName.toString(), fileStream, null, metadata, (err, etag) => {
            if (err) return console.log(err)
            console.log('File uploaded successfully.');

            console.log(etag);
            console.log(`https://${env.MINIO_URL}:${env.MINIO_PORT}/${bucket}/${fileName}`);
            productPhotoUrl = `https://${env.MINIO_URL}:${env.MINIO_PORT}/${bucket}/${fileName}`;
        });
        return productPhotoUrl;
};

module.exports = {
    uploadProductPhotoFromBuffer,
}