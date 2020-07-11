const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DB CONNECTION
const pool = require( './pool' );
const { query } = require('./pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let queryString = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE id = $1 ;`;
    pool.query( queryString, 
        [ req.params.id] ).then( ( result )=>{
            res.sendStatus( 201 );
        }).catch( ( err )=>{
            console.log(  err );
            res.sendStatus( 500 );
        }) //end query
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
    pool.query(queryString).then ( (result) =>{
        res.send(result.rows)
    }).catch ( ( error ) => {
        console.log('error on GET:', error)
        res.sendStatus( 500 );
    }) //end query
}); // END GET Route

//POST Route
router.post('/', (req, res) => {
    console.log( 'in /gallery POST:', req.body );
    let queryString = `INSERT INTO "gallery" ( "path", "description", "likes" ) 
        VALUES ( $1, $2, $3);`;
    //send query to database, send response to client    
    pool.query( queryString, 
        [ req.body.path, req.body.description, 0 ] ).then( ( result )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 )
    }) //end query
})//end POST

//DELETE Route
router.delete('/:id', (req,res)=>{
    console.log(req.params.id) 
    let queryString = `DELETE FROM "gallery" WHERE id = $1 ;`;
    //query delete
    pool.query ( queryString, [req.params.id]  )
    .then( (result )=>{
        res.sendStatus(201);
    }).catch( (error) =>{
        console.log(error);
        res.sendStatus(500);
    })//end query
})//end DELETE

module.exports = router;