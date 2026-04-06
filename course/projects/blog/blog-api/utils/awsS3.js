const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const {
	awsRegion,
	awsAccessKey,
	awsSecretAccessKey,
} = require("../config/keys");

const client = new S3Client({
	region: awsRegion,

	credentials: {
		accessKeyId: awsAccessKey,

		secretAccessKey: awsSecretAccessKey,
	},
});

const uploadFile = async ({ file, ext }) => {};

module.exports = { uploadFile };

// npm i @aws-sdk/client-s3
