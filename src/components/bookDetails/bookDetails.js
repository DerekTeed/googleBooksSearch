import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

import "./bookDetails.css";

class BookDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
        thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        rating: props.averageRating
    };
  }
  render(){
    return (
    <Row className="details">
        <Col md={12}>
            <Container>
                <Row>
                    <Col md={2}>
                        <Image src={this.state.thumbnail} thumbnail/>
                      
                    </Col>
                    <Col md={10}>
                        text side
                    </Col>
                </Row>
            </Container>
        </Col>
    </Row>
    )
  }
}

export default BookDetails;