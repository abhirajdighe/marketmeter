const express = require('express');
const router = express.Router();
const MdataController = require('../../controllers/mdata-controller')
const FruitsController = require('../../controllers/fruitsdata-controller')
const EggsController = require('../../controllers/eggsdata-controller')
const ChickenController = require('../../controllers/chickendata-controller')

// Routes

//// VEGETABLE
//Admin routes
router.post('/admin/vegetables',MdataController.create);
router.post('/admin/vegetables/price',MdataController.getDatedData);
router.get('/admin/vegetables/',MdataController.get);
router.post('/admin/vegetables/destroy',MdataController.destroy);
// User routes
router.post('/user/vegetables/price',MdataController.getDatedData);

//// FRUITS
//Admin routes
router.post('/admin/fruit',FruitsController.create);
router.post('/admin/fruit/price',FruitsController.getDatedData);
router.get('/admin/fruit/',FruitsController.get);
router.post('/admin/fruit/destroy',FruitsController.destroy);
// User routes
router.post('/user/fruit/price',FruitsController.getDatedData);


//// Eggs
//Admin routes
router.post('/admin/eggs',EggsController.create);
router.post('/admin/eggs/price',EggsController.getDatedData);
router.get('/admin/eggs/',EggsController.get);
router.post('/admin/eggs/destroy',EggsController.destroy);
// User routes
router.post('/user/eggs/price',EggsController.getDatedData);

//// Chicken
//Admin routes
router.post('/admin/chicken',ChickenController.create);
router.post('/admin/chicken/price',ChickenController.getDatedData);
router.get('/admin/chicken/',ChickenController.get);
router.post('/admin/chicken/destroy',ChickenController.destroy);
// User routes
router.post('/user/chicken/price',ChickenController.getDatedData);






module.exports= router;