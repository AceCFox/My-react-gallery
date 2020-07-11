const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DB CONNECTION
const pool = require( './pool' )

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    // const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes ++;
    //     }
    // }
    let queryString = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE id = $1 ;`;
    pool.query( queryString, 
        [ req.params.id] ).then( ( result )=>{
            res.sendStatus( 201 );
        }).catch( ( err )=>{
            console.log( err );
            res.sendStatus( 500 );
        }) //end query
    res.sendStatus(200);
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
   // res.send(galleryItems);
}); // END GET Route

module.exports = router;