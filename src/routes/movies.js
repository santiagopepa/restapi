const { Router } = require('express');
const router = Router();
const _= require('underscore')


const movies = require('./sample.json');


router.get('/movies', (req, res) => {
    res.json(movies);
});

router.post('/movies' ,(req,res) => {
    const {title, director, year, rating}= req.body;
    
    if(title && director && year && rating){
        const id = movies.lenght + 1;
        const newMovie = {...req.body,id};
        movies.push(newMovie);
        res.json(movies);
        
    } else{
        res.json('there was a error')
    }
});

router.put('/movies/:id', (req, res) => {
    const { id } = req.params;
    const {title, director, year, rating}= req.body;

        if(title && director && year && rating){
            _.each(movies , (movie,i) => {
                if (movie.id == id){
                    movie.title = title;
                    movie.director = director;
                    movie.year = year;
                    movie.rating = rating;
                }
            });
        res.json(movies);
    } else {
        res.send("error")
    }
});

router.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies,  (movie, i) => { 
        if(movie.id == id){
            movies.splice(i, 1)
        }
    });
    res.send(movies)
});


module.exports = router;