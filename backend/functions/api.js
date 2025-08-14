const serverless = require("serverless-http");
// Assuming your main Express app file is named 'index.js' or 'app.js'
// and is located in the 'backend' root.
// If it's named differently, change 'index' to your file's name.
const app = require("../src/index");

module.exports.handler = serverless(app);
