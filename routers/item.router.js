const {
	getItems,
	createItem,
	getItem,
	deleteItem,
	updateItem,
	getItemsByCategory,
} = require("../controllers/item.controllers");

const router = require("express").Router();

router.get("/", getItems);
router.get("/:categoryId", getItemsByCategory);
router.get('/:itemId', getItem)
router.delete("/:itemId", deleteItem);
router.put("/:itemId", updateItem);
router.post("/", createItem);

module.exports = router;