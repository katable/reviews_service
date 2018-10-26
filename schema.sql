DROP DATABASE IF EXISTS reviewsDb;
CREATE DATABASE reviewsDb;
USE reviewsDb;

CREATE TABLE restaurant (
  restaurant_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (restaurant_id)
);

CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE review (
    review_id INT NOT NULL AUTO_INCREMENT,
    restaurant_id INT NOT NULL,
    user_id INT NOT NULL,
    author VARCHAR(50) NULL,
    review_text VARCHAR(500) NULL,
    review_time VARCHAR(50) NOT NULL,
    overall_rating INT NOT NULL,
    food_rating INT NOT NULL,
    service_rating INT NOT NULL,
    ambience_rating INT NOT NULL,
    PRIMARY KEY (review_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant (restaurant_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

