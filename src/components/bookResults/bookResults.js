import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import BookTitle from "../bookTitle/bookTitle";
import BookDetails from "../bookDetails/bookDetails";
import "./bookResults.css";

class BookResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false
    };
  }
  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  } 
  render(){
    return (<div>
      <BookTitle {...this.props.volumeInfo} onClick={this.toggleDetails.bind(this)}/>
      <ToggleDisplay show={this.state.showDetails}>
        <BookDetails {...this.props.volumeInfo} />
        {/* <BookDetails imageLinks={this.props.volumeInfo.imageLinks} averageRating={this.props.volumeInfo.averageRating} /> */}
      </ToggleDisplay>
    </div>)
  }
}

export default BookResult;
