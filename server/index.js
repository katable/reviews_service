const express = require("express");
const joi = require('joi');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Health Check
app.get('/healthCheck', (req, res) => {
  res.status(200).send("Health Check OK");
})

//getAllReviews
// app.get('/restaurant/:restaurant_id/reviews', (req, res) => {
//   db.getAllReviews((error, results) => {
//     if (error) {
//       res.status(404).send('not found');
//     } else {
//       res.status(200).send(results);     
//     }
//   });
// });

// //getIndividualReview
// app.get('/restaurant/:restaurant_id/reviews/:review_id', (req, res) => {
//   db.getIndividualReview((error, results) => {
//     const reviewId = parseInt(req.body.review_id);
//     const foundReview = reviews.find((review) => {
//       return review.review_id === reviewId; //?
//     })
//     if (error) {
//       res.status(404).send("Cannot find review");
//     } else {
//       res.status(200).send(foundReview);
//     }
//   });
// });

// //getAllReviewsFromUser
// app.get('/restaurant/:restaurant_id/reviews/:user_id', (req, res) => {
//   db.getAllReviewsFromUser((error, results) => {
//     const userId = parseInt(req.body.user_id);
//     const foundUserReview = reviews.find((review) => {
//       return review.user_id === userId; //?
//     });
//     if (error) {
//       res.status(404).send("Cannot find user");
//     } else {
//       res.status(200).send() //???
//     }
//   });
// });

// //postReview
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

// //deleteReview
// app.delete('/restaurant/:resaturant_id/reviews/:review_id', (req, res) => {
//   db.deleteReview((error, results) => {
//   const reviewToDelete = parseInt(req.body.review_id);
//   const foundReviewToDelete = reviews.find((review) => {
//     return review.review_id === reviewToDelete;
//   });
//     if (error) {
//       res.status(404).send("review not found");
//     } else {
//       const index = reviews.indexOf(foundReviewToDelete);
//       reviews.splice(index, 1);
//       res.status(200).send(reviews);
//     }
//   });
// });

// //patchReview
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