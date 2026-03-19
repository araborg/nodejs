const app = require("./app");

const PORT = 8000;

// listen to server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
