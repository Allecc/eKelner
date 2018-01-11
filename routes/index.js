var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
const sequelize = new Sequelize('admin_food', 'admin_food', 'TvO1ItvSs3', {
  host: 'allecx.nazwa.pl',
  dialect: 'mysql'
});


// test sequelize connection
sequelize.authenticate().then(function(errors) {
  if(errors) console.log(errors) });

const Food = sequelize.define('food', {
  nazwa: Sequelize.STRING,
  typ: Sequelize.STRING,
  cena: Sequelize.INTEGER,
  skladniki: Sequelize.TEXT,
  opis: Sequelize.TEXT,
  zdjecie: Sequelize.STRING
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pizza', function(req, res){
  Food.findAll({where: { typ: "Pizza"}}).then(pizza => {
  // projects will be an array of all Project instances
    res.json(pizza);
  });
});

router.get('/mieso', function(req, res){
  Food.findAll({where: { typ: "Mieso"}}).then(mieso => {
  // projects will be an array of all Project instances
    res.json(mieso);
  });
});
router.get('/wypelnij_baze', function(req, res){

sequelize.sync()
  .then(() => {
    Food.create({
      nazwa: 'Kurczak',
      typ: 'Mieso',
      cena: '30',
      skladniki: 'Kurczak, przyprawa, sałata',
      opis: 'quem culpa ipsum fugiat noster culpa anim enim dolore nulla',
      zdjecie: '/images/mieso_kurczak.jpeg'
    });
    Food.create({
      nazwa: 'Stek',
      typ: 'Mieso',
      cena: '42',
      skladniki: 'veniam magna quid cillum',
      opis: 'multos irure ipsum cillum tempor quis anim malis sunt culpa',
      zdjecie: '/images/mieso_stek.jpeg'
    });
    Food.create({
      nazwa: 'Żeberka',
      typ: 'Mieso',
      cena: '35',
      skladniki: 'esse eram labore magna anim',
      opis: 'labore export esse enim minim multos tamen minim sint culpa',
      zdjecie: '/images/mieso_stek.jpeg'
    });

  });
  res.end();
});


module.exports = router;
