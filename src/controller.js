const { nanoid } = require("nanoid");
const { data } = require("../data/billing.json")
const { faker } = require("@faker-js/faker")
inform = console.log;
const { writeJSONFile, readJSONFile, addToInventory } = require("./helpers")


///Reading
function index(product) {
    product.map((eachProd) => `Unique Id: ${eachProd.id} name:${eachProd.name} priceInCents: ${eachProd.priceInCents}  inStock: ${eachProd.inStock} Shipping Availablity: ${eachProd.ShippingAvailability}`);
}
//index(guest)


function show(arrayOfProducts, userProd) {

    const userProd_2 = process.argv[3]

    const prodToFind = arrayOfProducts.find((prod) => prod.id === userProd);

    if (process.argv[3] === userProd) {

        if (prodToFind) {
            return "Product ID: " + prodToFind.uId + "\n" + "Name Of Product: " + prodToFind.name + "\n" + "Price Of Product: $" + prodToFind.priceInCents + "\n" + "In Stock: " + prodToFind.inStock + "\n" + "Shipping: " + prodToFind.ShippingAvailability;
        } else {
            return "Products Not Found"
        }

    }
}
//show()

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
//create()

function destroy(/*argv*/) {
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
//destroy()

function edit() {

    const id = process.argv[3];
    const products = readJSONFile()
    const index = products.findIndex((item) => item.uId === prodUId);
    if (index < -1) {

        products.splice(index, 1);
        // products[index].uId = prodUId;
        // products[index].name = updatedProduct;
        // products[index].priceInCents = price;
        // products[index].inStock = inStock;
        // products[index].ShippingAvailability = ShippingAvailability;


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