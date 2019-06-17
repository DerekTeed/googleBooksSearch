import React, { Component } from 'react';
import BookResult from "../bookResults/bookResults";
import "./listBookResults.css";

class BookResultsList extends Component {
  render(){
    const {books} = this.props
    return(
      <div>
        {books ? books.map(book => <BookResult key={book.id} {...book} />) : ""}
        {/* {books ? books.map(book => <BookResult key={book.id} volumeInfo={book.volumeInfo} />) : ""} */}
      </div>
    )
  }
}

export default BookResultsList;