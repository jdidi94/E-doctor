const {Doctor} = require("../database/index.js")

module.exports.getAll = async (req, res) => {
    try {
      const result = await Doctor.findAll({
        include: { all: true, nested: true },
      });
      res.json(result)
    } catch (error) {
      res.status(404).send(error);
    }
  };

  module.exports.create = async (req,res) => {
    try {
        const result = await Doctor.create(req.body)
        res.json(result)
    } catch (error) {
        res.status(404).send(error)
    }
  }
  
  module.exports.getOne = async (req, res) => {
    try {
      const result = await Doctor.findById({ where: { id: req.params.id } });
      res.json(result);
    } catch (error) {
      res.status(404).send(error);
    } 
  };
  
  module.exports.remove = async (req, res) => {
    try {
      const result = await Doctor.destroy({ where: { id: req.params.id } });
      res.json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  };
  
  module.exports.update = async (req, res) => {
    const {isverified} = req.body

    try {
      const result = await Doctor.update({isVerified:true},{ 
        where: { id: req.params.id } });
      res.json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  };
  