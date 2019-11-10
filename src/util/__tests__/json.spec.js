const createJsonUtils = require("../json");

describe("#JSON utils", () => {
  describe("getJsonFile", () => {
    it("should parse the JSON file from the given path and return an object", () => {
      const mockObject = { test: "some string" };
      const mockJson = JSON.stringify(mockObject);
      const mockReadFile = jest.fn((path, encoding, callback) =>
        callback(null, mockJson)
      );
      const fs = { readFile: mockReadFile };
      const { getJsonFile } = createJsonUtils(fs, null);

      return getJsonFile("test").then(result => {
        expect(mockReadFile).toHaveBeenCalled();
        expect(result).toEqual(mockObject);
      });
    });
  });

  describe("writeConfigFile", () => {
    it("should stringify the given object and save it to a file", () => {
      const mockLogIfVerbose = jest.fn();
      const mockWriteFile = jest.fn();

      const fs = { writeFile: mockWriteFile };
      const { writeConfigFile } = createJsonUtils(fs, mockLogIfVerbose);
      const path = "/test.json";
      const answers = { answer: "test" };

      writeConfigFile(path, answers);

      expect(mockWriteFile).toHaveBeenCalled();
      expect(mockLogIfVerbose).not.toHaveBeenCalled();
    });
  });
});
