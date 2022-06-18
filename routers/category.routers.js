const {
	getCategories,
	createCategory,
	getCategory,
	deleteCategory,
	updateCategory,
} = require("../controllers/category.controllers");

const router = require("express").Router();

router.get("/", getCategories);
router.get("/:categoryId", getCategory);
router.delete("/:categoryId", deleteCategory);
router.put("/:categoryId", updateCategory);
router.post("/", createCategory);

module.exports = router;