const { nanoid } = require("nanoid");
const { data } = require("../data/billing.json")
const { faker } = require("@faker-js/faker")
inform = console.log;
const { writeJSONFile, readJSONFile, addToInventory } = require("./helpers")


function index(product) {
    return product.map((eachProd) => `Unique Id: ${eachProd.uId}  name: ${eachProd.name}  priceInCents: ${eachProd.priceInCents}  inStock: ${eachProd.inStock}  Shipping Availablity: ${eachProd.ShippingAvailability}`).join("\n")

}


function show(arrayOfProducts, userProd) {


    const prodToFind = arrayOfProducts.filter((prod) => prod.uId === userProd);

    for (let prodInfo of prodToFind) {
        return `Product ID: ${chalk.purple(prodInfo.uId)} \n Name Of Product: ${chalk.blue(prodInfo.name)} \n Price Of Product ${chalk.purple(prodInfo.priceInCents)} \n In Stock: ${chalk.blue(prodInfo.inStock)} \n Shipping: ${chalk.blue(prodInfo.ShippingAvailability)}`
    }
    return "Products Not Found"
}


function create(products, userProd, userProd_2, userProd_3, userProd_4) {

    const newObj = {
        uId: nanoid(7),
        name: userProd,
        priceInCents: userProd_2,
        inStock: userProd_3,
        ShippingAvailability: userProd_4
    };
    const product = newObj
    addToInventory(product)
    return product;
}


function destroy() {
    const id = process.argv[3]
    const products = readJSONFile()
    const index = products.findIndex((item) => item.uId === id);

    if (index > -1) {
        products.splice(index, 1);
        writeJSONFile(products)
        inform("Item successfully removed from collection");
        return products;
    } else {
        inform("Item not found. No action taken");
        return products;
    }
}


function edit(products, userProd, userProd_2, userProd_3, userProd_4, userProd_5) {


    const index = products.findIndex((item) => item.uId === userProd);



    if (index !== -1) {

        products[index].name = userProd_2;
        products[index].priceInCents = userProd_3;
        products[index].inStock = userProd_4;
        products[index].ShippingAvailability = userProd_5;
        writeJSONFile(products)

        inform("Cart successfully updated");
        return products;
    } else {

        inform("Item not found. No action taken");
        return products;
    }
}

module.exports = {
    index,
    show,
    create,
    destroy,
    edit
}