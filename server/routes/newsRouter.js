const Router = require('express');
const newsController = require('../controllers/newsController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), newsController.createNews);
router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getOneNews);


module.exports = router;