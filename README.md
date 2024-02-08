
# Ecommerce API Project

This project implements a basic Ecommerce API for managing product inventory using Node.js and MongoDB.

## Setup

1. Clone this repository to your local machine.

2. Install the required dependencies using npm:

   ```bash
   npm install

3.Create a .env file in the root directory with your MongoDB URI:
MONGODB_URI=mongodb://localhost/ecommerce

4.Run the server:
  node index.js

5. Open Postman or use curl (or an alternative) to test the API endpoints.


Folder Structure

*controllers/: Contains controller files that handle the business logic of the API.

*models/: Contains Mongoose models for defining the data structure.

*routes/: Contains route files that define the API endpoints.

*config/: Configuration files, such as database configuration.

*index.js: Main application entry point.


Ecommerce-API/

│

├── controllers/

│ └── productController.js

│

├── models/

│ └── Product.js

│

├── routes/

│ └── productRoutes.js

│

├── config/

│ └── database.js

│

├── index.js

├── .env

├── .gitignore

└── README.md





API Endpoints

*POST /products/create: Create a new product.

*GET /products: List all products.

*DELETE /products/:id: Delete a product by ID.

*POST /products/:id/update_quantity/?number=10: Update the quantity of a product.

