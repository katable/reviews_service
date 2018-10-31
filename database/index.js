const mysql = require('mysql');
const faker = require('faker');
const fakerator = require('fakerator');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
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
  const query = `select * from user inner join review on user.user_id=review.user_id`;
  connection.query(query, [restaurant_id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      let filteredByRestaurantId = results.filter((result) => {
        return result.restaurant_id = restaurant_id;
      });
      callback(null, filteredByRestaurantId);
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

function seedData(){
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
    let date = faker.date.between('2015-01-01', '2018-10-29'); 
    let overall_rating = Math.floor(Math.random() * 6);
    let food_rating = Math.floor(Math.random() * 6);
    let service_rating = Math.floor(Math.random() * 6);
    let ambience_rating = Math.floor(Math.random() * 6);
    let restaurantName = faker.company.companyName();
    insertIntoReview(restaurant_id, user_id, author, review, date, overall_rating, food_rating, service_rating, ambience_rating, restaurantName, (err, results) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log('Review added successfully.');
      }
    });
  }
}
seedData();

module.exports.getAllReviews = getAllReviews;
module.exports.insertIntoReview = insertIntoReview;
module.exports.getIndividualReview = getIndividualReview;
module.exports.getAllReviewsFromUser = getAllReviewsFromUser;
module.exports.deleteReview = deleteReview;
module.exports.patchReview = patchReview;
