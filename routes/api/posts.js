const express = require('express');
const router = express.Router();

//@route      POST api/Posts
//@desc       test route
//@access     Public
router.post('/', (req, res) => res.send('Posts route'));

module.exports = router;