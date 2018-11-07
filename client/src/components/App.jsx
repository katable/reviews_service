import React from 'react';
import Reviews from './Reviews.jsx';
import NoReviews from './NoReviews.jsx';
import Header from './Header.jsx';
import SelectMenu from './SelectMenu.jsx';
import SearchBar from './SearchBar.jsx';
import style from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [], 
      selectMenu: {value: 'newest'},
      query: ''
    }
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews() {
    fetch('/restaurant/6/reviews')
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
    let reviews = this.state.reviews;
    if (this.state.query) {
      reviews = this.filterForSearchedResults(reviews, this.state.query);
    }
    switch(this.state.selectMenu.value) {
      case 'newest':
        reviews = this.filterDataNewestHelperFunction(reviews);
        break;
      case 'oldest':
        reviews =  this.filterDataOldestHelperFunction(reviews);
        break;
      case 'highest-rating':
        reviews = this.sortHighestRatingsFirst(reviews);
        break;
      case 'lowest-rating':
        reviews = this.sortLowestRatingsFirst(reviews);
        break;
      default:
        reviews = reviews;
    }
    return (
      <Reviews reviews={reviews} />
    )
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

onInputSearch(event) {
  event.preventDefault();
  let query = event.target.value;
  this.setState({
    query: query
  });
}

filterForSearchedResults(list, word) {
  let lowerCaseWord = word.toLowerCase();
  return list.filter(function(review){
    let lowerCaseReview = review.review_text.toLowerCase();
    if (lowerCaseReview.includes(lowerCaseWord)){
      return true;
    } else {
      return false;
    }
  });
}

  filterDataNewestHelperFunction(list) {
    list.forEach((review) => {
      review.time = new Date(review.review_time);
    });
    return list.sort((a, b) => {
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
    return list.sort((a, b) => {
      return b.overall_rating - a.overall_rating;
    });
  };
 
  sortLowestRatingsFirst(list) {
    return list.sort((a, b) => {
      return a.overall_rating - b.overall_rating;
    });
  };

  render(){ 
    return (
      <div className = {style.bodyReviews}>
        <div>
          <Header reviewsCount={this.state.reviews.length} restaurantInfo = {this.state.reviews}/>
        </div>
        <div>
          <div className={style.sortingText}>
            <div className={style.sortByContainer}>
              <p className={style.sortByText}>Sort By</p>
            </div>
            <div>
              <SelectMenu onSelectHandler={this.renderFilteredData.bind(this)} value={this.state.selectMenu.value} />
            </div>
            <div>
              <SearchBar onSearch={this.onInputSearch.bind(this)}/>
            </div>
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