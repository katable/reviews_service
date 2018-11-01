import React from 'react';
import Reviews from './Reviews.jsx';
import NoReviews from './NoReviews.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [], 
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
    return (
      <Reviews reviews={this.state.reviews} />
    )
  }

  renderNoReviews() {
    return (
      <NoReviews restaurantName={this.state.reviews}/>
    )
  }

  render(){
    return (
      <div>
       
        {this.state.reviews.length > 0 ? this.renderReviews() : this.renderNoReviews()}
      </div>
    )
  }
}

export default App;