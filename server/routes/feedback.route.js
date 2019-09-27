const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/',(req,res)=>{
    const queryText = 'SELECT * FROM "feedback";';
    pool.query(queryText)
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log('get', err);
    })
})

module.exports = router;