const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/AdminController");

//Middelware
const authTokenMiddleware = require('../../middlewares/authTokenMiddleware')
const checkRoleMiddleware = require("../../middlewares/checkRoleMiddleware");

router.route("/dashboard").get(adminController.index);


//user 

router.route("/users").get(authTokenMiddleware, checkRoleMiddleware, adminController.users);


//category
router.route("/categories").get(authTokenMiddleware, checkRoleMiddleware, adminController.categories);


//products 
router.route("/products").get(authTokenMiddleware, checkRoleMiddleware, adminController.products);

//products by category
router.route("/:categoryId/products").get(authTokenMiddleware, checkRoleMiddleware, adminController.productsByCategory);

//invoice 
router.route("/invoice").get(authTokenMiddleware, checkRoleMiddleware, adminController.invoice)

router.route("/invoice/:orderId").get(authTokenMiddleware, checkRoleMiddleware, adminController.invoiceDetails)


module.exports = router;