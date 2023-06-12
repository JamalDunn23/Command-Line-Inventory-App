const { nanoid } = require("nanoid");
const { chalk } = require("chalk")

inform = console.log;
const { writeJSONFile, readJSONFile, addToInventory } = require("./helpers")


function index(product) {

    return product.map((eachProd) => `Unique Id: ${eachProd.uId}  name: ${eachProd.name}  priceInCents: ${eachProd.priceInCents}  inStock: ${eachProd.inStock}  Shipping Availablity: ${eachProd.ShippingAvailability}`).join("\n")

}


function show(arrayOfProducts, userProd) {


    const prodToFind = arrayOfProducts.find((prod) => prod.uId === userProd || prod.name === userProd);

    if (prodToFind) {
        return ` Product ID: ${prodToFind.uId} \n Name Of Product: ${prodToFind.name} \n Price ${prodToFind.priceInCents} \n In Stock: ${prodToFind.inStock} \n Shipping: ${prodToFind.ShippingAvailability}`
    } else {
        return "Products Not Found"
    }
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