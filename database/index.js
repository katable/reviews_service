const mysql = require('mysql');
const faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reviewsDb'
});

connection.connect(function(err) {
  if (err) {
    throw err; 
  } else {
    console.log("Connection made.");
    //the moment the db connects, we start adding info into restaurants
    for (let i = 0; i < 15; i++) {
      let restaurantName = faker.company.companyName();
      insertIntoRestaurant(restaurantName, (err, results) => {
        if (err) {
          console.log("Error:", err);
        } else {
          console.log(`${restaurantName} added successfully`);
        }
      });
    }
    for (let i = 0; i < 20; i++) {
      let username = faker.internet.userName();
      insertIntoUser(username, (err, results) => {
        if (err) {
          console.log("Error:", err);
        } else {
          console.log(`${username} added successfully`);
        }
      });
    }
    for (let i = 0; i < 100; i++) {
      let restaurant_id = Math.ceil(Math.random() * 15);
      let user_id = Math.ceil(Math.random() * 20);
      let review = faker.lorem.lines();
      let username = faker.internet.userName();
      let date = faker.date.past();
      let overall_rating = Math.floor(Math.random() * 6);
      let food_rating = Math.floor(Math.random() * 6);
      let service_rating = Math.floor(Math.random() * 6);
      let ambience_rating = Math.floor(Math.random() * 6);
      insertIntoReview(restaurant_id, user_id, review, username, date, overall_rating, food_rating, service_rating, ambience_rating, (err, results) => {
        if (err) {
          console.log("Error", err);
        } else {
          console.log('Review added successfully.');
        }
      });
    }
  }
});

var insertIntoRestaurant = function(name, callback) {
  var query = `INSERT INTO restaurant (name) VALUES ("${name}")`;
  connection.query(query, [name], (error, results, fields) => {
    callback(error, null);
  });
}

var insertIntoUser = function(username, callback) {
  var query = `INSERT INTO user (username) VALUES ("${username}")`;
  connection.query(query, [username], (error, results, fields) => {
    callback(error, null);
  });
}

var insertIntoReview = function(restaurant_id, user_id, author, review_text, review_time, overall_rating, food_rating, service_rating, ambience_rating, callback) {
  var query = `INSERT INTO review (restaurant_id, user_id, author, review_text, review_time, overall_rating, food_rating, service_rating, ambience_rating) VALUES (${restaurant_id}, ${user_id}, "${review_text}", "${author}", "${review_time}", ${overall_rating}, ${food_rating}, ${service_rating}, ${ambience_rating})`;
  connection.query(query, [restaurant_id, user_id, review_text, author, review_time, overall_rating, food_rating, service_rating, ambience_rating], (error, results, fields) => {
    callback(error, null);
  });
}

//getAllReviews: select all reviews for the restaurant.
const getAllReviews = function(restaurant_id, callback) {
  const query = `select * from review where restaurant_id=${restaurant_id}`; 
  connection.query(query, (error, results, fields) => {
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
    } else {
      callback(null, results);
    }
  });
}

//patchReview: update the review based on the review id
const patchReview = function(updatedText, review_id, callback) {
  const query= `update review set review_text=${updatedText} where review_id=${review_id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

//pathRatings: update the ratings based on the review id.
const patchRatings = function(newOverallRating, newFoodRating, newServiceRating, newAmbienceRating, review_id, callback) {
  const query=`update review set overall_rating=${newOverallRating}, food_rating=${newFoodRating}, service_rating=${newServiceRating}, ambience_rating=${newAmbienceRating} where review_id=${review_id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports.getAllReviews = getAllReviews;
module.exports.getIndividualReview = getIndividualReview;
module.exports.getAllReviewFromUser = getAllReviewsFromUser;
module.exports.deleteReview = deleteReview;
module.exports.patchReview = patchReview;
module.exports.patchRatings = patchRatings;
