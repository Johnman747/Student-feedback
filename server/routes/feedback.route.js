const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/',(req,res)=>{
    const queryText = 'SELECT * FROM "feedback" ORDER BY "id" ASC;';
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
    pool.query(queryText,[el.form1,el.form2,el.form3,el.form4])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        res.sendStatus(500);
        console.log('post',err)
    })
})

router.delete('/:id',(req,res)=>{
    let id = req.params.id
    const queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';
    pool.query(queryText,[id])
    .then((result)=>{
        res.sendStatus(202)
    }).catch((err)=>{
        res.sendStatus(500)
        console.log(err);
    });
})

router.put('/:id/:boolean',(req,res)=>{
    let id = req.params.id
    let boolean = req.params.boolean
    const queryText = 'UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;';
    pool.query(queryText,[boolean,id])
    .then((result)=>{
        res.sendStatus(202);
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;