var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let paketwisata = [
    {'nama': 'wisata pulau kemaro', 'harga': 500000},
    {'nama':'wisata punti kayu', 'harga': 250000},
    {'nama':'wisata Jakabaring', 'harga': 100000},
  ]
  res.render('paket wisata',{
    title: 'paket wisata',
    'listpaketwisata': 'listpaketwisata'
  });
    title: 'beranda'
  });

router.get('/paketwisata', function (req, res, next) {
  res.render('paketwisata', {
    title: 'paketwisata'
  });
});


router.get('/orderpaket', function (req, res, next) {
  res.render('orderpaket', {
    title: 'orderpaket'
  });
});

router.get('/orderdetail', function (req, res, next) {
  res.render('orderdetail', {
    title: 'detail pemesanan paket'
  });
});

module.exports = router;