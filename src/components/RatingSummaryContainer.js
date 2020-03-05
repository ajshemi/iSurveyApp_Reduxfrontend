import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addoneRatingSummary,addallRatingsSummary} from '../Redux/actions'


class RatingSummaryContainer extends Component {
    handleRatingFetch=(e) => {
        fetch('http://localhost:3000/allrating')
        .then(resp=>resp.json())
        .then(allratings=>this.props.addallRatingsSummary(allratings))

        fetch(`http://localhost:3000/rating/${this.props.user.id}`)
        .then(resp=>resp.json())
        .then(onerating=>this.props.addoneRatingSummary(onerating.rating))
    }

    render() { 
        console.log(this.props.user)
        console.log(this.props.onerating)
        console.log(this.props.allratings)
        return (
        <div>
            {/* Just One Chart */}
            <button onClick={this.handleRatingFetch}>x</button>
        </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.products.products,
      user: state.user.user,
      onerating:state.ratings.onerating,
      allratings:state.ratings.allratings
    }
  }
export default connect(mapStateToProps,{addoneRatingSummary,addallRatingsSummary})(RatingSummaryContainer);