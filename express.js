/*global require */

const express    = require('express');
const chalk      = require('chalk');
const app        = express();
const portNumber = 3000;
const sourceDir  = 'dist';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(chalk.bold.cyan(`Express web server started: http://localhost:${portNumber}`));
  console.log(chalk.cyan(`Serving content from /${sourceDir}/`));
});
