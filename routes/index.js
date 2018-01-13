var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
const sequelize = new Sequelize('admin_food', 'admin_food', 'TvO1ItvSs3', {
    host: 'allecx.nazwa.pl',
    dialect: 'mysql'
});


// test sequelize connection
sequelize.authenticate().then(function (errors) {
    if (errors) console.log(errors)
});

const Food = sequelize.define('food', {
    nazwa: Sequelize.STRING,
    typ: Sequelize.STRING,
    cena: Sequelize.INTEGER,
    skladniki: Sequelize.TEXT,
    opis: Sequelize.TEXT,
    zdjecie: Sequelize.STRING
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/pizza', function (req, res) {
    Food.findAll({where: {typ: "Pizza"}}).then(pizza => {
        res.json(pizza);
    });
});

router.get('/mieso', function (req, res) {
    Food.findAll({where: {typ: "Mieso"}}).then(mieso => {
        res.json(mieso);
    });
});

router.get('/przystawki', function (req, res) {
    Food.findAll({where: {typ: "Przystawki"}}).then(przystawki => {
        res.json(przystawki);
    });
});

router.get('/zupy', function (req, res) {
    Food.findAll({where: {typ: "Zupy"}}).then(zupy => {
        res.json(zupy);
    });
});

router.get('/napoje', function (req, res) {
    Food.findAll({where: {typ: "Napoje"}}).then(napoje => {
        res.json(napoje);
    });
});

router.get('/surowki', function (req, res) {
    Food.findAll({where: {typ: "Surowki"}}).then(surowki => {
        res.json(surowki);
    });
});


router.get('/ryby', function (req, res) {
    Food.findAll({where: {typ: "ryby"}}).then(ryby => {
        res.json(ryby);
    });
});


router.get('/produkty/:id', function (req, res) {
    let id = req.params.id;
    Food.findOne({where: {id: id}}).then(prod => {
        console.log(prod);
        res.json(prod);
    });
});


router.get('/wypelnij_baze', function (req, res) {

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


            Food.create({
                nazwa: 'Jajka zapiekane z łososiem',
                typ: 'Przystawki',
                cena: '12',
                skladniki: 'jaja, łosoś, ragout, majonez',
                opis: 'Jajka zapiekane z łososiem i warzywnym ragout podawaj na śniadanie lub jako przystawkę podczas eleganckiej kolacji...',
                zdjecie: '/images/przystawki/jajka_zapiekane_z_lososiem_i_warzywnym_ragout_0274798.jpg'
            });
            Food.create({
                nazwa: 'Wielkanocne koreczki',
                typ: 'Przystawki',
                cena: '14',
                skladniki: 'szczypiorek, marchewa, majonez, jajko, łosoś wędzony',
                opis: 'Wielkanocne koreczki z jajkami przepiórczymi i wędzonym łososiem to pyszna inspiracja na kolorowe przekąski',
                zdjecie: '/images/przystawki/wielkanocne-koreczki-z-jajkami-przepiorczymi-i-wedzonym-lososiem.jpg'
            });
            Food.create({
                nazwa: 'Sałatka z kalafiorem',
                typ: 'Przystawki',
                cena: '18',
                skladniki: 'sos sałatkowy koperkowo-ziołowy, łosoś wędzony w kawałku, jajka, ogórek konserwowy, szczypiorek, koperek',
                opis: 'Sałatka jest uniwersalnym dodatkiem do obiadów, ale równie dobrze sprawdzi się jako samodzielne danie',
                zdjecie: '/images/przystawki/salatka_z_suszonego_kalafiora_z_wedzonym_lososiem_jajkami_i_koperkiem_0190009.jpg'
            });
            Food.create({
                nazwa: 'Mysia sałatka',
                typ: 'Przystawki',
                cena: '20',
                skladniki: 'jajka gotowane na twardo, świeży ogórek, szczypiorek, rzodkiewki, pomidorki, szczypiorek, oliwka',
                opis: 'Zabawna i pożywna, dla maluchów',
                zdjecie: '/images/przystawki/mysia-salatka-video.jpg'
            });


            Food.create({
                nazwa: 'Grochowa z ziemniakami i kiełbasą',
                typ: 'Zupy',
                cena: '10',
                skladniki: 'groch, kiełbasa, przyprawy, ziemniaki',
                opis: 'Pożywna zupa grochowa',
                zdjecie: '/images/zupy/zupa_grochowa_01_0.jpg'
            });
            Food.create({
                nazwa: 'Forszmak z kurczakiem',
                typ: 'Zupy',
                cena: '9',
                skladniki: 'kurczak, papryka, pieczarki, ogórek, przyprawy',
                opis: 'Zupa z kurczakiem, papryką, pieczarkami i ogórkiem kiszonym. Inspirowana klasycznym daniem - forszmak, lecz w lżejszej wersji niż oryginał.',
                zdjecie: '/images/zupy/zupa_forszmak_z_kurczakiem_00_0.jpg'
            });


            Food.create({
                nazwa: 'Meksykańska z kurczakiem i kukurydzą',
                typ: 'Zupy',
                cena: '13',
                skladniki: 'por, marchew, oliwa, cebula, czosnek, pierś z kurczaka, śmietana',
                opis: 'Smaczna i pożywna',
                zdjecie: '/images/zupy/zupa_meksykanska_z_kurczakiem_kukurydza_00_0.jpg'
            });

            Food.create({
                nazwa: 'Ogórkowa',
                typ: 'Zupy',
                cena: '8',
                skladniki: 'Ogórki, przyprawy, zioła',
                opis: 'Klasyczne danie jak u Twojej mamy',
                zdjecie: '/images/zupy/zupa_ogorkowa_00.jpg'
            });


            Food.create({
                nazwa: 'Pepsi',
                typ: 'Napoje',
                cena: '5',
                skladniki: 'pepsi, lód',
                opis: 'Pojemność 0,2 ml',
                zdjecie: '/images/napoje/pepsi.png'
            });
            Food.create({
                nazwa: 'Fanta',
                typ: 'Napoje',
                cena: '5',
                skladniki: 'fanta, lód',
                opis: 'Pojemność 0,2 ml',
                zdjecie: '/images/napoje/fanta.png'
            });
            Food.create({
                nazwa: 'Sprite',
                typ: 'Napoje',
                cena: '5',
                skladniki: 'sprite, lód',
                opis: 'Pojemność 0,2 ml',
                zdjecie: '/images/napoje/sprite.png'
            });
            Food.create({
                nazwa: 'Harnaś',
                typ: 'Napoje',
                cena: '1,99',
                skladniki: 'Harnaś, lód',
                opis: 'Pojemność 0,5 ml',
                zdjecie: '/images/napoje/harnas.png'
            });
            Food.create({
                nazwa: 'Cola',
                typ: 'Napoje',
                cena: '5',
                skladniki: 'cola, lód',
                opis: 'Pojemność 0,2 ml',
                zdjecie: '/images/napoje/cola.png'
            });


            Food.create({
                nazwa: 'Colewsław',
                typ: 'Surowki',
                cena: '6',
                skladniki: 'kapusta, marchew, sos',
                opis: 'idealna do obiadu',
                zdjecie: '/images/surowki/coleslaw_00.jpg'
            });
            Food.create({
                nazwa: 'Z kapusty pekińskiej',
                typ: 'Surowki',
                cena: '6',
                skladniki: 'marchew, jabło, cebula, ogórek',
                opis: 'idealna do obiadu',
                zdjecie: '/images/surowki/surowka_z_kapusty_pekinskiej_00.jpg'
            });

            Food.create({
                nazwa: 'Marchew z jabłkiem',
                typ: 'Surowki',
                cena: '6',
                skladniki: 'marchew, jabłko',
                opis: 'klasyczna',
                zdjecie: '/images/surowki/surowka_z_marchewki_jablka_00.jpg'
            });


            Food.create({
                nazwa: 'Łosoś Grillowany',
                typ: 'Ryby',
                cena: '30',
                skladniki: 'łosoś, sos kurkowy',
                opis: 'Doskonały na obiady',
                zdjecie: '/images/ryby/grillowany_losos_z_sosem_kurkowym_00.jpg'
            });
            Food.create({
                nazwa: 'Pieczony filet z kalibuta',
                typ: 'Ryby',
                cena: '25',
                skladniki: 'Halibut, masło, cytryna, oregano',
                opis: 'Dobry na romantyczną kolację',
                zdjecie: '/images/ryby/pieczony_halibut_00.jpg'
            });
            Food.create({
                nazwa: 'Pstrąg pieczony',
                typ: 'Ryby',
                cena: '28',
                skladniki: 'chili, masło, pstrąg, olej',
                opis: 'Ostry pstrąg rozpływający się w ustach',
                zdjecie: '/images/ryby/pieczony_pstrag_z_maslem_chili_00.jpg'
            });


        });
    res.end();
});


module.exports = router;
