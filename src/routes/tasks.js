const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API tasks go here');
})

module.exports = router;