function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Products: " + 50);
        }, 2000);
    });
}

function getCategories() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Categories: " + 5);
        }, 500);
    });
}

function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Users: " + 500);
        }, 3000);
    });
}



async function main() {

    /*
    getProducts().then(productsNum => {
        getCategories().then(categoriesNum => {
            getUsers().then(usersNum => {
                console.log(productsNum, categoriesNum, usersNum);
            });
        });
    });
    */

    console.log("\n\n\n");
    console.time("fetch statistics 1");
    const productsNum = await getProducts();
    const categoriesNum = await getCategories();
    const usersNum = await getUsers();
    console.log(productsNum, categoriesNum, usersNum);
    console.log("\n");
    console.timeEnd("fetch statistics 1");
    console.log("\n\n\n");
    

    console.time("fetch statistics 2");
    const all = await Promise.all([
        getProducts(),
        getCategories(),
        getUsers()
    ]);
    console.timeEnd("fetch statistics 2");

    console.log(all);


    console.log("\n\n\n");





}

main();