const path  = require("path");
const fs = require("fs");

const getHtml = (htmlFileName) => {
    const filepath =path.join("./public", htmlFileName);
    return fs.readFileSync(filepath, "utf-8");
}

module.exports = getHtml;