/*global require */

const express    = require('express');
const chalk      = require('chalk');
const app        = express();
const portNumber = 3000;
const sourceDir  = 'dist';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
<<<<<<< HEAD
    console.log(`Express web server started: http://localhost:${portNumber}`);
    console.log(`Serving content from /${sourceDir}/`);
=======
  console.log(chalk.bold.cyan(`Express web server started: http://localhost:${portNumber}`));
  console.log(chalk.cyan(`Serving content from /${sourceDir}/`));
>>>>>>> 86e515cf235ead7b6ac88469b36fab078e640ee8
});
