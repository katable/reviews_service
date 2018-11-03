import React from 'react';
import Reviews from './Reviews.jsx';
import NoReviews from './NoReviews.jsx';
import Header from './Header.jsx';
import SelectMenu from './SelectMenu.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [], 
      selectMenu: {value: 'newest'},
      searchBar: {search: ''}
    }
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews() {
    fetch('/restaurant/2/reviews')
    .then((reviews) => {
      return reviews.json();
    })
    .then((reviewsJSON) => {
      this.setState({
        reviews: reviewsJSON
      });
    })
    .catch(() => {console.log("Error: Reviews not found.")}
  )};

  renderReviews() {
    let reviews = [];
    switch(this.state.selectMenu.value) {
      case 'newest':
        reviews = this.filterDataNewestHelperFunction(this.state.reviews);
        break;
      case 'oldest':
        reviews =  this.filterDataOldestHelperFunction(this.state.reviews);
      case 'highest-rating':
        reviews = this.sortHighestRatingsFirst(this.state.reviews);
        break;
      case 'lowest-rating':
        reviews = this.sortLowestRatingsFirst(this.state.reviews);
        break;
      default:
      reviews = this.filterDataNewestHelperFunction(this.state.reviews);
    }
    return (
      <Reviews reviews={reviews} />
    )
  }

  searchReviews(event) {
    event.preventDefault();
    this.state.reviews.filter((review)=>{
      return review
    })
  }

  renderNoReviews() {
    return (
      <NoReviews restaurantName={this.state.reviews}/>
    )
  }

  renderFilteredData(event) {
    event.preventDefault();
    this.setState({
      selectMenu: {value: event.target.value}
    })
  };

  filterDataNewestHelperFunction(list) {
    list.forEach((review) => {
      review.time = new Date(review.review_time);
    });
    return list.sort((a,b) => {
      return b.time-a.time;
    });
  };

  filterDataOldestHelperFunction(list) {
    list.forEach((review) => {
      review.time = new Date(review.review_time);
    });
    return list.sort((a, b) => {
      return a.time - b.time;
    });
  }

  sortHighestRatingsFirst(list) {
    return list.sort((a,b) => {
      return b.overall_rating - a.overall_rating;
    });
  };
 
  sortLowestRatingsFirst(list) {
    return list.sort((a,b) => {
      return a.overall_rating - b.overall_rating;
    });
  };

  render(){ 
    return (
      <div>
        <div>
          <Header reviewsCount={this.state.reviews.length} restaurantInfo = {this.state.reviews}/>
        </div>
        <div>
          <div className="sorting-text">
            <SelectMenu onSelectHandler={this.renderFilteredData.bind(this)} value={this.state.selectMenu.value} />
            <SearchBar />
          </div> 
        </div>
        <div>
          {this.state.reviews.length > 0 ? this.renderReviews() : this.renderNoReviews()}
        </div>
      </div>
    )
  }
}

export default App;