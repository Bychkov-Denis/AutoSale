const Router = require('express');
const announcementController = require('../controllers/announcementController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), announcementController.createAnnouncement);
router.get("/", announcementController.getAllAnnouncements);
router.get("/:id", announcementController.getOneAnnouncement);

module.exports = router;