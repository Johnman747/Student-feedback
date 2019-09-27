const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/',(req,res)=>{
    const queryText = 'SELECT * FROM "feedback";';
    pool.query(queryText)
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.sendStatus(500);
        console.log('get', err);
    })
})

router.post('/', (req,res)=>{
    console.log(req.body)
    let el = req.body
    const queryText=`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1,$2,$3,$4);`;
    pool.query(queryText,[el[0],el[1],el[2],el[3]])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        res.sendStatus(500);
        console.log('post',err)
    })
})

module.exports = router;