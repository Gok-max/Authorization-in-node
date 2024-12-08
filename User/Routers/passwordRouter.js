const express = require("express");
const { registerUser, loginUser, getUser } = require("../Controllers/passwordController");
const authMiddleware = require("../Middleware/passwordMiddleware")

const router = express.Router();

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/user", authMiddleware, getUser);

module.exports = router;