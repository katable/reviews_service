const db = require('../database/index.js');
const faker = require('faker');

const overallRating = (list) => {
    let sum = 0;
    list.forEach((review) => {
      let combinedSum = review.food_rating + review.service_rating + review.ambience_rating;
      sum += combinedSum;
    })
    return Math.ceil(sum/3);
  }

function seedData(){
    for (let i = 0; i < 100; i++) {
      let restaurantName = faker.company.companyName();
      db.insertIntoRestaurant(restaurantName, (err, results) => {
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
      db.insertIntoUser(username, city, state, (err, results) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log(`${username} from ${city}, ${state} added successfully`);
        }
      });
    }
    for (let i = 0; i < 200; i++) {
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
      db.insertIntoReview(restaurant_id, user_id, author, review, date, overall_rating, food_rating, service_rating, ambience_rating, restaurantName, (err, results) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log('Review added successfully.');
        }
      });
    }
  }
  
  seedData();