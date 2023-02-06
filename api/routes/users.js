const { getUsers, updateUser, deleteUser, getUser, getUsersStats } = require("../controllers/userController");
const { isAuth } = require("../middleware/verifyToken");

const router = require("express").Router();



router.get("/",isAuth,getUsers)
router.put("/:id",isAuth,updateUser)
router.delete("/:id",isAuth,deleteUser)
router.get("/:id",getUser)
router.get("/stats/all",getUsersStats)

module.exports = router;