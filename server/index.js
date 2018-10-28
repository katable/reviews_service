const express = require("express");
const joi = require('joi');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = process.env.port || 8080;

app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//getAllReviews
app.get('/restaurant/:restaurant_id/reviews', (req, res) => {
  // console.log('REQUEST', req)
  db.getAllReviews(req.params.restaurant_id, (err, results) => {
    if (err) {
      res.status(404).send("reviews not found");
    } else {
      res.status(200).send(results);
    }
  });
});

// getIndividualReview
app.get('/reviews/:review_id', (req, res) => {
  db.getIndividualReview(req.params.review_id, (err, results) => {
    // console.log("RESULTS", results)
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

// //getAllReviewsFromUser
app.get('/user/:user_id/reviews', (req, res) => {
  db.getAllReviewsFromUser(req.params.user_id, (err, results) => {
    console.log(req);
    if (err) {
      res.status(404).send("reviews not found"); 
    } else {
      res.status(200).send(results); 
    }
  });
});

// //postReview
app.post('/reviews', (req, res) => {
  db.insertIntoReview(req.body.restaurant_id, req.body.user_id,req.body.author, req.body.review_text, req.body.review_time,req.body.overall_rating, req.body.food_rating, req.body.service_rating, req.body.ambience_rating, (err, results) => {
    if (err) {
      res.status(404).send("unable to post"); 
    } else {
      res.status(201).send("successfully posted");
    }
  });
});
// app.post('/restaurant/:restaurant_id/reviews', (req, res) => {
//   db.postReview((error, results) => {
//     const schema = {review: joi.string.min(10)};
//     const result = joi.validate(req.body.schema);
//   })
//   if (error) {
//     res.status(400).send(result.error.details[0].message);
//   } else {
//     res.status(201).send(reviews);
//   }
// });

app.delete('/reviews/:review_id', (req, res) => {
  db.deleteReview(req.params.review_id, (err, results) => {
    if (err) {
      res.status(404).send("review not found");
    } else {
      res.status(200).send("review deleted"); 
    }
  });
});

// //patchReview
app.patch('/reviews/:review_id', (req, res) => {
  db.patchReview(req.body.updatedText, req.body.newOverallRating, req.body.newFoodRating, req.body.newServiceRating, req.body.newAmbienceRating, req.params.review_id, (err, results) => {
    if (err) {
      res.status(404).send("review not found." + err);
    } else {
      res.status(200).send("review successfully updated");
    }
  });
});
// app.patch('/resturant/:restaurant_id/reviews/:review_id', (req, res) => {
//   db.patchReview((error, results) => {
//     const reviewId = parseInt(req.body.review_id);
//     const foundReview = reviews.find((review) => {
//       return review.review_id === reviewId;
//     });
//     const schema = {review: joi.string().min(20).required()};
//     if (error) {
//       res.status(404).send("review not found");
//     } else {
//       res.status(200).send(foundReview);
//     }
//   });
// });

app.listen(port, () => {console.log(`Listening to port ${port}...`)});