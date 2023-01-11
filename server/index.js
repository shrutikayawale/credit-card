const express = require("express");
const bodyParser = require('body-parser');
const { addAccount } = require("./controller/addAccount");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/v1/account", addAccount);

app.listen(port, () => {
  console.log(`Server is listening on port - ${port}`);
});
