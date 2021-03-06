const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log('Router loaded');


router.get('/',homeController.home);
router.use('/users',require('./users'));
// router.use('/profiles',require('./users'));
// router.use('/post',require('./post'));

// for any furthur routes acess from here
// router.use('/routerName', require('./routerfile'));


module.exports = router;