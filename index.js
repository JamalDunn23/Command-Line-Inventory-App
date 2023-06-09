const inform = console.log
//const readline = require("readline")
// const {faker} = require("@faker-js/faker")

const { writeJSONFile, readJSONFile } = require("./src/helpers")
const { index, show, create, destroy, edit, updatedCart, total } = require("./src/controller")

function run() {
    inform("Welcome To Vintage All-Purpose Store🥼🕹️📡🍕🥝👖\n\n");
    inform("We Have Whatever You Need, Delivered With Speed!!🏎️💨💨\n\n");

    let products = readJSONFile("./data", "billing.json")
    let writeToFile = false;
    let updatedCart = [];


    const action = process.argv[2];
    const userProd = process.argv[3];


    switch (action) {

        case "index":
            const cartView = index(products);
            inform(cartView);
            break;

        case "show":
            const cartViewShow = show(products, userProd);
            inform(cartViewShow);
            break;

        case "create":
            updatedCart = create(userProd);
            break;

        case "update":
            updatedCart = edit(products, userProd, process.argv[4]);
            break;

        case "destroy":
            const productId = process.argv
            updatedCart = destroy(productId);  
            break;

        case "deleteCart":
            updatedCart = deleteCart(products, userProd)
            break;

        case "total":
            let totalPrice = total(products)
            inform(totalPrice)
            break;


        default:
            inform("Hey There We Found A Error");
    }

    if (writeToFile) {
        writeJSONFile(products);
        inform("Thank you. Cart have been updated");
    }
}
run()
