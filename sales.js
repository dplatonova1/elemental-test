let csvToJson = require("convert-csv-to-json");

let fileInputName = "Sales.csv";
let fileOutputName = "db.json";
csvToJson.fieldDelimiter(",").getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
