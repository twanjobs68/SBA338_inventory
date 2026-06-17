//search Inventory function
//restock Product function

/*Your program should:

1. Create Classes
    -Make a Product class for store items.
    -Make another class that extends Product 
    (for example, FoodProduct or ElectronicsProduct).*/

    class Product {
        constructor(name,price,quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }
    //create a product
    const myProduct = new Product("Yoka Lamp", 50, 4);

    console.log(`The new product is ${myProduct}.`);

/*
2. Add Product Data
    -Create several products and store them in an array.
    -Pretend the data came from a database or file.
3. Search the Inventory
    -Allow users to search for a product by name.
    -Allow users to view products by category.
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

