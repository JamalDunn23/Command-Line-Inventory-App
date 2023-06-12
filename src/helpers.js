
const { readFileSync, writeFileSync } = require("node:fs")
const path = ("./data")
const fileName = ("billing.json")

function readJSONFile() {

    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []
}

function writeJSONFile(data) {

    data = JSON.stringify(data,null,2)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })

}

function addToInventory(products) {
    const inventoryData = readJSONFile() || [];
    inventoryData.push(products);
    writeJSONFile(inventoryData);
}

function readJSONCart() {

    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []
}

function writeJSONCart(data) {

    data = JSON.stringify(data,null,2)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })

}
module.exports = {
    readJSONFile,
    writeJSONFile,
    addToInventory,
    writeJSONCart,
    readJSONCart
}