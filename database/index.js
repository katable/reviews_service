const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'reviewsdb.cwckfxrwmjhb.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: 'root1234',
  database: 'reviewsDb'
});

var insertIntoRestaurant = function(name, callback) {
  var query = `insert into restaurant (name) values ("${name}")`;
  connection.query(query, [name], (error, results, fields) => {
    callback(error, null);
  });
}

var insertIntoUser = function(username, city, state, callback) {
  var query = `insert into user (username, city, state) values ("${username}", "${city}", "${state}")`;
  connection.query(query, [username, city, state], (error, results, fields) => {
    callback(error, null);
  });
}

var insertIntoReview = function(restaurant_id, user_id, author, review_text, review_time, overall_rating, food_rating, service_rating, ambience_rating, restaurantName, callback) {
  var query = `insert into review (restaurant_id, user_id, author, review_text, review_time, overall_rating, food_rating, service_rating, ambience_rating, restaurantName) values (${restaurant_id}, ${user_id}, "${author}","${review_text}", "${review_time}", ${overall_rating}, ${food_rating}, ${service_rating}, ${ambience_rating}, "${restaurantName}")`;
  connection.query(query, [restaurant_id, user_id, review_text, author, review_time, overall_rating, food_rating, service_rating, ambience_rating, restaurantName], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

//get all reviews for a restaurant as well as user information for each review based on specified id
const getAllReviews = function (restaurant_id, callback) {
  const query = `select * from user, review where user.user_id=review.user_id and review.restaurant_id=${restaurant_id}`;
  connection.query(query, [restaurant_id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

//getIndividualReview: select only that specific review 
const getIndividualReview = function(review_id, callback) {
  const query = `select * from review where review_id=${review_id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

//getAllReviewsFromUser: select all reviews by the specific user
const getAllReviewsFromUser = function(user_id, callback) {
  const query = `select * from review where user_id=${user_id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

//deleteReview: delete a specific review
const deleteReview = function(review_id, callback) {
  const query = `delete from review where review_id=${review_id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {;
      callback(null, results);
    }
  });
}

//patchReview: update ratings or review based on review id
const patchReview = function(updatedText, newOverallRating, newFoodRating, newServiceRating, newAmbienceRating, review_id, callback) {
  const query=`update review set review_text="${updatedText}", overall_rating=${newOverallRating}, food_rating=${newFoodRating}, service_rating=${newServiceRating}, ambience_rating=${newAmbienceRating} where review_id=${review_id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports.insertIntoRestaurant = insertIntoRestaurant;
module.exports.insertIntoUser = insertIntoUser;
module.exports.getAllReviews = getAllReviews;
module.exports.insertIntoReview = insertIntoReview;
module.exports.getIndividualReview = getIndividualReview;
module.exports.getAllReviewsFromUser = getAllReviewsFromUser;
module.exports.deleteReview = deleteReview;
module.exports.patchReview = patchReview;
