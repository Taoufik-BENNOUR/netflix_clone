const { addMovie, deleteMovie, updateMovie, getMovie, featureMovie, getMovies } = require("../controllers/movieController");
const { isAuth } = require("../middleware/verifyToken");

const router = require("express").Router();



router.get("/",isAuth,getMovies)
router.post("/",isAuth,addMovie)
router.put("/:id",isAuth,updateMovie)
router.delete("/:id",isAuth,deleteMovie)
router.get("/:id",getMovie)
router.get("/film/random",featureMovie)

module.exports = router;