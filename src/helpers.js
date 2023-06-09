
const { readFileSync, writeFileSync } = require("node:fs")
const path = ("./data")
const fileName = ("billing.json")

function readJSONFile() {

    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []
}

function writeJSONFile(data) {

    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })

}

function addToInventory(products) {
    const inventoryData = readJSONFile() || [];
    inventoryData.push(products);
    writeJSONFile(inventoryData);
}
module.exports = {
    readJSONFile,
    writeJSONFile,
    addToInventory
}