import React from 'react';
import Reviews from './Reviews.jsx';

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
    fetch('/restaurant/1/reviews')
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

  render(){
    return (
      <div>
        <Reviews sampleReviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;