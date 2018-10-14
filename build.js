const pug = require("pug");
const fs = require("fs");

const createDirIfNotExists = dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const processTemplate = (outputFilename, template, data) =>
  fs.writeFileSync(outputFilename, pug.compileFile(template)(data));

const data = JSON.parse(fs.readFileSync("./src/data.json", "utf8"));

const sortedData = {
  sketches: data.sketches.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  })
};

const outputDir = "./dist";

createDirIfNotExists(outputDir);

processTemplate(`${outputDir}/index.html`, "./src/index.pug", sortedData);

data.sketches.forEach(sketch => {
  const sketchFolder = `${outputDir}/${sketch.uri}`;

  createDirIfNotExists(sketchFolder);

  processTemplate(`${sketchFolder}/index.html`, "./src/sketch.pug", { sketch });
});
