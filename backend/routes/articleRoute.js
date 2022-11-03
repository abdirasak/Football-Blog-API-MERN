const express = require("express");
const router = express.Router();
const {
  getArticles,
  getArticle,
  postArticle,
  editArticle,
  deleteArticle,
  getArticlesByUser,
} = require("../controllers/articlesController");
const { protect, checkAccess } = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", getArticles);
router.get("/currUser", protect, getArticlesByUser);
router.get("/:id", getArticle);
router.post("/", upload.single("articleImage"), protect, postArticle);
router.put("/:id", protect, checkAccess("admin", "basic"), editArticle);
router.delete("/:id", protect, checkAccess("admin", "basic"), deleteArticle);

module.exports = router;