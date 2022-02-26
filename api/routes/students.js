const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        mesage: "Get Request"
    })
})

router.post('/',(req, res, next) => {
    res.status(201).json({
        message: "Post Request"
    })
})
// router.post();
//router.delete();

    module.exports = router;