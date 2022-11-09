import React from 'react';
import { Card as _Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import './Card.css';
import { Button } from './Button.js';

export class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" class="col-12 col-sm-6 col-lg-4 col-xxl-3">
                <_Card bg="light" border="light" >
                    <_Card.Img variant="top" src={this.props.image} key={this.props.key}/>
                    <_Card.Body>
                        <_Card.Title> {this.props.title} </_Card.Title>
                        <_Card.Text>
                            {this.props.text}
                        </_Card.Text>
                    </_Card.Body>
                </_Card>
            </div>
        );
    }
}