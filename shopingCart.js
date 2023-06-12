const { writeJSONFile, readJSONFile, readJSONCart, writeJSONCart } = require("./src/helpers")
const { addToCart, clearCart, updateQuanity, updateTotal, promoCode } = require("./src/shopController")
const action = process.argv[2];
const product = process.argv[3];

let writeToFile = false;


function run() {

inform("Welcome To The Shopping Cart, You Are Almost Finished Shopping With Us!!!")

    let writeToCart = false;
    let updatedCart = [];

    let prodInCart = readCartJSON("data", "cart.JSON")
    switch (action) {

        case "addToCart":
            const addToCart = addToCart(prodInCart, product)
            inform(addToCart)
            break;

        case "clearCart":
            const clearCart = clearCart(prodInCart, product)
            inform(clearCart)
            break;

        case "updateQuantity":
            const updateQuantity = updateQuantity(prodInCart, product)
            break;

        case "updateTotal":
            const updateTotal = updateTotal(prodInCart, product)
            break;

        case "promoCode":
            const promoCode = promoCode(prodInCart, product)
            break;

        default:
            inform("Hey There We Found An Error")

            if (writeToFile) {
                writeJSONFile(product);
                inform("Thank you. Cart have been updated");

            }


    }
}
run()
