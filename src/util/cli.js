const chalk = require("chalk");

const createCliUtils = commander => {
  const logIfVerbose = (str, error) => {
    if (commander.verbose) {
      if (error) {
        console.error(`ERROR: ${str}`);
      } else {
        console.log(chalk.bgGreen(`INFO: ${str}`));
      }
    }
  };

  return { logIfVerbose };
};

module.exports = createCliUtils;
