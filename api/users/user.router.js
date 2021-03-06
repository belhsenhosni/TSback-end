const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, login } =require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createUser);
router.get("/:id", checkToken, getUserByUserId);
router.get("/", checkToken, getUsers);
router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);


module.exports = router;
