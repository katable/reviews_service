import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Stars from '../../client/src/components/Stars.jsx';
import Star from '../../client/src/components/Star.jsx';
import ReviewsFile from '../../client/src/components/Reviews.jsx';

let reviewSample = 
[
  {
      "user_id": 2,
      "username": "Ronny_Sauer",
      "city": "West Hollieville",
      "state": "South Carolina",
      "review_id": 46,
      "restaurant_id": 6,
      "author": "Timmothy_Connelly89",
      "review_text": "Quos aliquid facere iusto harum praesentium dolore ab et necessitatibus.\nProvident atque est quas magni est aut.\nMinus quidem repudiandae quasi vero id at earum.\nVelit quis placeat molestiae sed ut a sint officia.\nFugiat maxime placeat facilis facilis commodi eum.",
      "review_time": "Sat Oct 21 2017 12:34:32 GMT-0700 (PDT)",
      "overall_rating": 0,
      "food_rating": 0,
      "service_rating": 0,
      "ambience_rating": 4,
      "restaurantName": "Strosin LLC"
  }
];

describe('reviews test', function(){
  it('should have stars', function (){
    let mounted = mount(<Stars starRating={reviewSample} />)
  });
});

describe('Star Test', function(){
  it('should have colored class', function (){
    let wrapper = mount(<Star colored={true}/>);
    expect(wrapper.find(".fas").hasClass('colored')).to.equal(true);
  })

  it('should not have colored class', function(){
    let wrapper = mount(<Star colored={false}/>);
    expect(wrapper.find(".fas").hasClass('colored')).to.equal(false);
  });
});