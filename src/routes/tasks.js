const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
})

module.exports = router;