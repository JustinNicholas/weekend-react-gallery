const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const pictureLikes = req.body.likes;

    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    let queryText = 'UPDATE pictures SET likes=$2 WHERE id=$1';

    pool.query(queryText, [galleryId, pictureLikes])
        .then( result => {
            res.sendStatus(204);
        }).catch( err => {
            console.log(err);
            res.sendStatus(500);
        })
    
}); // END PUT Route

// status PUT Route
router.put('/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const updateStatus = req.body.showingimage;

    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.showingImage = req.body.showingImage;
    //     }
    // }
    let queryText = 'UPDATE pictures SET showingimage=$2 WHERE id=$1';

    pool.query(queryText, [galleryId, updateStatus])
        .then( result => {
            res.sendStatus(204);
        }).catch( err => {
            console.log(err);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    let queryText = 'SELECT * FROM pictures ORDER BY id';

    pool.query(queryText)
        .then( result => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch( err => {
            console.log(err);
            res.sendStatus(500);
        })
}); // END GET Route

router.post('/', (req, res) => {
    let queryText = 'INSERT INTO pictures ("path", "description", "likes", "showingimage") VALUES ($1, $2, $3, $4)';
    let queryValues = [req.body.path, req.body.description, 0, true]

   
    pool.query(queryText, queryValues)
    .then( result => {
        res.sendStatus(200);
    }).catch( err => {
        console.log(queryValues);
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;