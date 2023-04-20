const Router = require('express');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const newsRouter = require('./newsRouter');
const announcementRouter = require('./announcementRouter');


const router = new Router();


router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/announcement", announcementRouter);
router.use("/news", newsRouter);

module.exports = router;