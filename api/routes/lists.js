const { addList, featureList, deleteList } = require("../controllers/listController");
const { isAuth } = require("../middleware/verifyToken");

const router = require("express").Router();



router.get("/",isAuth,featureList)
router.post("/",isAuth,addList)
router.delete("/:id",isAuth,deleteList)

module.exports = router;