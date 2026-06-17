//search Inventory function
//restock Product function

/*Your program should:

1. Create Classes
    -Make a Product class for store items.
    -Make another class that extends Product 
    (for example, FoodProduct or ElectronicsProduct).*/

    // class Product {
    //     constructor(name, price, quantity) {
    //         this.name = name;
    //         this.price = price;
    //         this.quantity = quantity;
    //     }
    // }
    //create a product
    // const myProduct = new Product("Yoka Lamp", 50, 4);

    // console.log(myProduct);

/*
2. Add Product Data
    -Create several products and store them in an array.
    -Pretend the data came from a database or file.*/

//  class Product {
//         constructor(name, price, quantity) {
//             this.name = name;
//             this.price = price;
//             this.quantity = quantity;
//         }

//         getInfo() {
//             return (`Product class: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);        }
//     }
    //create a product
//     const myProduct = new Product("Yoka Lamp", 50, 4);

//     console.log(myProduct.getInfo());

//3. Search the Inventory
    //-Allow users to search for a product by name.
  //  -Allow users to view products by category.

    
 class Product {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }

        getInfo() {
            return (`Product class: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);        }
    }
    //create 3 products
    const myProduct = [
        new Product("Yoka Lamp", 50, 4),
        new Product("Marble Lamp", 75, 6),
        new Product("Nickle Lamp", 100, 2)];

    //allow users to view products by name

    function viewProduct(name) {
        const product = myProduct.find(
            item => item.name === name
        );

        if (product) {
            console.log(product.getInfo());
        }
    }

    //allow user to view product by category

    function viewCategory(category) {
        const categoryOutput = myProduct.filter(
            item => item.category === category
        );

        if (categoryOutput .length > 0) {


            categoryOutput.forEach(myProduct =>
                console.log(myProduct.getInfo())
            );
        }else {
            console.log("Product not found,");
        }
    }
    viewProduct("Marble Lamp");//should be found
    viewCategory("Nickle");//should not be found
    //console.log(myProduct.getInfo());
    
    
    /*
4. Calculate Inventory Value
    -Find the total value of all products in stock.
    -(Price × Quantity for each product.)
5. Use Asynchronous Code
    -Create an async function that simulates loading or updating inventory data.
    -Use async/await and try...catch.
6. Use JSON
    -Convert product data to JSON using JSON.stringify().
    -Convert it back to objects using JSON.parse().
7. Use a Regular Expression (RegExp)
    -Use a regular expression to search product names or validate product IDs. */

