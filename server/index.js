const express = require("express");
const Joi = require('joi');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = process.env.port || 8080;

app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// getAllReviews: select all reviews for the restaurant.
app.get('/restaurant/:restaurant_id/reviews', (req, res) => {
  db.getAllReviews(req.params.restaurant_id, (err, results) => {
    if (err) {
      res.status(404).send("reviews not found");
    } else {
      res.status(200).send(results);
    }
  });
});

//getIndividualReview: select only that specific review 
app.get('/reviews/:review_id', (req, res) => {
  db.getIndividualReview(req.params.review_id, (err, results) => {
    results.find((review) => {
      return review.review_id === req.params.review_id;
    });
    if (err) {
      res.status(404).send("cannot find review");
    } else {
      res.status(200).send(results[0]);
    }
  });
});

//getAllReviewsFromUser: select all reviews by the specific user
app.get('/user/:user_id/reviews', (req, res) => {
  db.getAllReviewsFromUser(req.params.user_id, (err, results) => {
    if (err) {
      res.status(404).send("reviews not found"); 
    } else {
      res.status(200).send(results); 
    }
  });
});

//post a review and use Joi to validate the review text so restaurant can avoid spam/overly short reviews and make sure that the star rating stays between 0 and 5
app.post('/reviews', (req, res) => {
  const schema = Joi.object().keys({
      review_text: Joi.string().min(10).max(700).required(), 
      restaurant_id: Joi.number().required(), 
      user_id: Joi.number().required(), 
      author: Joi.string().min(5).max(50), 
      review_time: Joi.string().max(50).required(), 
      overall_rating: Joi.number().min(0).max(5).required(), 
      food_rating: Joi.number().min(0).max(5).required(), 
      service_rating: Joi.number().min(0).max(5).required(), 
      ambience_rating: Joi.number().min(0).max(5).required(),
      restaurantName: Joi.string().min(2).max(30)
    });
    Joi.validate(req.body, schema, (err, results) => {
      if (err) {
        res.status(404).send("unable to post: " + err);
      } else {
        db.insertIntoReview(req.body.restaurant_id, req.body.user_id, req.body.author, req.body.review_text, req.body.review_time, req.body.overall_rating, req.body.food_rating, req.body.service_rating, req.body.ambience_rating, restaurantName, (err, results) => {
          if (err) {
            res.status(404).send("unable to post");
          } else {
            res.status(201).send("successfully posted");
          }
        });
      }
  });
});

//deleteReview: delete a specific review
app.delete('/reviews/:review_id', (req, res) => {
  db.deleteReview(req.params.review_id, (err, results) => {
    if (err) {
      res.status(404).send("review not found");
    } else {
      res.status(200).send("review deleted"); 
    }
  });
});

////updates a review and uses Joi to validate the updated review so restaurant can avoid spam/overly short reviews and make sure that the star rating stays between 0 and 5
app.patch('/reviews/:review_id', (req, res) => {
  const schema = Joi.object().keys({
    updatedText: Joi.string().min(10).max(700).required(),
    newOverallRating: Joi.number().min(0).max(5).required(), 
    newFoodRating: Joi.number().min(0).max(5).required(), 
    newServiceRating: Joi.number().min(0).max(5).required(), 
    newAmbienceRating: Joi.number().min(0).max(5).required()
  });
  Joi.validate(req.body, schema, (err, results) => {
    if (err) {
      res.status(404).send("unable to update: " + err);
    } else {
      db.patchReview(req.body.updatedText, req.body.newOverallRating, req.body.newFoodRating, req.body.newServiceRating, req.body.newAmbienceRating, req.params.review_id, (err, results) => {
        if (err) {
          res.status(404).send("unable to update: " + err);
        } else {
          res.status(201).send("review successfully updated");
        }
      });
    }
  });
});

app.listen(port, () => {console.log(`Listening to port ${port}...`)});