const inform = console.log
const { fs } = require("fs")
const { writeJSONCart, readJSONCart } = require("src/helpers")

function addToCart(item_SKU, productName, price, quantity) {

    let shoppingCart = [];

    try {
        shoppingCart = JSON.parse(fs.readCartJSON("cart.JSON"));

    } catch (error) {

        inform("Product No Longer Available")
    }

    shoppingCart.push(cartItem)



};

fs.writeCartJSON("cart.JSON", JSON.stringify(shoppingCart, null, 2))









module.exports = {
    addToCart,
    clearCart,
    updateQuantity,
    updateTotal,
    promoCode
}

