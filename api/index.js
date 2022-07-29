const app = require("./src/app.js");
require('dotenv').config()
//const port = 3001; // defino un puerto donde va a eschuchar el servidor

app.listen(process.env.PORT, () => {
  console.log(`%s listening at port: ${process.env.PORT}`, "Server");
});
