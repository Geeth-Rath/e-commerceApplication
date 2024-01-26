const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createProduct,
  getProducts,
  getProductByUserId,
} = require("./product.controller");

router.post("/", checkToken, createProduct);
router.get("/", checkToken, getProducts);
router.get("/product/:id", checkToken, getProductByUserId);

module.exports = router;
