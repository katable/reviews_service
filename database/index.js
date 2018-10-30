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
    for (let i = 0; i < 100; i++) {
      let restaurantName = faker.company.companyName();
      insertIntoRestaurant(restaurantName, (err, results) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log(`${restaurantName} added successfully`);
        }
      });
    }
    for (let i = 0; i < 20; i++) {
      let username = faker.internet.userName();
      let city = faker.address.city();
      let state = faker.address.state();   
      insertIntoUser(username, city, state, (err, results) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log(`${username} from ${city}, ${state} added successfully`);
        }
      });
    }
    for (let i = 0; i < 150; i++) {
      let restaurant_id = Math.ceil(Math.random() * 100);
      let user_id = Math.ceil(Math.random() * 20);
      let review = faker.lorem.lines();
      let author = faker.internet.userName();
      let date = faker.date.recent();
      let overall_rating = Math.floor(Math.random() * 6);
      let food_rating = Math.floor(Math.random() * 6);
      let service_rating = Math.floor(Math.random() * 6);
      let ambience_rating = Math.floor(Math.random() * 6);
      insertIntoReview(restaurant_id, user_id, author, review,  date, overall_rating, food_rating, service_rating, ambience_rating, (err, results) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log('Review added successfully.');
        }
      });
    }
  }
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

var insertIntoReview = function(restaurant_id, user_id, author, review_text, review_time, overall_rating, food_rating, service_rating, ambience_rating, callback) {
  var query = `insert into review (restaurant_id, user_id, author, review_text, review_time, overall_rating, food_rating, service_rating, ambience_rating) values (${restaurant_id}, ${user_id}, "${author}","${review_text}", "${review_time}", ${overall_rating}, ${food_rating}, ${service_rating}, ${ambience_rating})`;
  connection.query(query, [restaurant_id, user_id, review_text, author, review_time, overall_rating, food_rating, service_rating, ambience_rating], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
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

module.exports.getAllReviews = getAllReviews;
module.exports.insertIntoReview = insertIntoReview;
module.exports.getIndividualReview = getIndividualReview;
module.exports.getAllReviewsFromUser = getAllReviewsFromUser;
module.exports.deleteReview = deleteReview;
module.exports.patchReview = patchReview;
