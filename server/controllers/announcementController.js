const uuid = require('uuid');
const path =  require('path');
const { Announcement } = require('../models/models');
const ApiError = require('../error/ApiError');

class AnnouncementController {
  async createAnnouncement(req, res, next) {
    try {
      const { name, city, mileage, price, year, power, drive, typeId, brandId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
    
      const announcement = await Announcement.create({name, city, mileage, price, year, power, drive, typeId, brandId, img: fileName});
      
      return res.json(announcement);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllAnnouncements(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let announcements;
    if(!brandId && !typeId) {
      announcements = await Announcement.findAndCountAll({limit, offset});
    }

    if(brandId && !typeId) {
      announcements = await Announcement.findAndCountAll({where: {brandId}, limit, offset});
    }

    if(!brandId && typeId) {
      announcements = await Announcement.findAndCountAll({where: {typeId}, limit, offset});
    }

    if(brandId && typeId) {
      announcements = await Announcement.findAndCountAll({where: {brandId, typeId}, limit, offset});
    }

    return res.json(announcements);
  }

  async getOneAnnouncement(req, res) {
    const { id } = req.params;
    const announcement = await Announcement.findOne({where: {id}});
    return res.json(announcement);
  }
}

module.exports = new AnnouncementController();