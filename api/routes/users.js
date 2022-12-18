const { getUsers, updateUser } = require("../controllers/userController");
const { isAuth } = require("../middleware/verifyToken");

const router = require("express").Router();



router.get("/",getUsers)
router.put("/:id",isAuth,updateUser)

module.exports = router;