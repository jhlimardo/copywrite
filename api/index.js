const app = require("./src/app.js");
const port = 3001; // defino un puerto donde va a eschuchar el servidor

app.listen(port, () => {
  console.log("%s listening at 3001");
});
