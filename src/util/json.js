const createJsonUtils = (fs, logIfVerbose) => {
  /**
   * Takes a JSON config file, opens its, reads the contents
   * passes it, and returns a JS object.
   *
   * @method getJsonFile
   *
   * @param {String} path
   *
   * @return {Object} data
   */
  const getJsonFile = path => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) reject(err);
        else resolve(JSON.parse(data));
      });
    });
  };

  /**
   *
   * Write config file out by taking the
   * JSOn object and stringifying it
   *
   * @method writeConfigFile
   *
   * @param {Object} answers
   *
   * @return {void}
   */
  const writeConfigFile = (outputPath, answers) => {
    fs.writeFile(outputPath, JSON.stringify(answers), function(err) {
      if (err) {
        logIfVerbose(`${err}`);
      }
    });
  };

  return { getJsonFile, writeConfigFile };
};

module.exports = createJsonUtils;
