const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const {
	awsRegion,
	awsAccessKey,
	awsSecretAccessKey,
	awsBucketName,
} = require("../config/keys");
const generateCode = require("./generateCode");

const client = new S3Client({
	region: awsRegion,

	credentials: {
		accessKeyId: awsAccessKey,

		secretAccessKey: awsSecretAccessKey,
	},
});

const uploadFile = async ({ file, ext }) => {
	// some_random_number.ext
	const Key = `${generateCode(12)}_${Date.now()}${ext}`;

	const params = {
		Bucket: awsBucketName,

		Body: file.buffer,
		key: key,
		ContentType: file.mimetype,
	};

	const command = new PutObjectCommand(params);

	try {
		await client.send(command);

		return Key;
	} catch (error) {
		console.log(error);
	}
};

module.exports = { uploadFile };

// npm i @aws-sdk/client-s3
