const { nanoid } = require("nanoid");
// const { data } = require("../data/billing.json")
const { faker } = require("@faker-js/faker")
inform = console.log;
const { writeJSONFile, readJSONFile, addToInventory } = require("./helpers")


///Reading
function index(guest) {
    guest.map((eachGuest) => `Unique Id: ${eachGuest.id} name:${eachGuest.name} priceInCents: ${eachGuest.priceInCents}  inStock: ${eachGuest.inStock} Shipping Availablity: ${eachGuest.ShippingAvailability}`);
}
//index(guest)


function show(arrayOfProducts, prodUId) {

    const prodToFind = arrayOfProducts.find((prod) => prod.id === prodUId);

    if (prodToFind) {
        return "Product ID: " + prodToFind.uId + "\n" + "Name Of Product: " + prodToFind.name + "\n" + "Price Of Product: $" + prodToFind.priceInCents + "\n" + "In Stock: " + prodToFind.inStock + "\n" + "Shipping: " + prodToFind.ShippingAvailability;
    } else {
        return "Product Not Found"
    }
}
//show()

function create() {

    const newObj = {
        uId: nanoid(7),
        name: `${faker.commerce.product()}`,
        priceInCents: faker.commerce.price(),
        inStock: faker.datatype.boolean(),
        ShippingAvailability: faker.datatype.boolean()
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

function edit(products, prodUId) {
    const index = products.findIndex((item) => item.uId === prodUId);
    if (index === -1) {

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