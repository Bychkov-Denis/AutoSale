const uuid = require('uuid');
const path =  require('path');
const { News } = require('../models/models');
const ApiError = require('../error/ApiError');


class NewsController {
  async createNews(req, res, next) {
    try {
      const { title, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const news = await News.create({title, description, img: fileName});
      return res.json(news);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllNews(req, res) {
    const news = await News.findAll();
    return res.json(news);
  }

  async getOneNews(req, res) {
    const { id } = req.params;
    const news = await News.findOne({where: {id}});
    return res.json(news);
  }
}

module.exports = new NewsController