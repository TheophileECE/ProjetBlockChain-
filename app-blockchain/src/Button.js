import React from 'react';
import { Button as Btn } from 'react-bootstrap';

export class Button extends React.Component {
    render() {
        return (
            <Btn variant={this.props.variant} onClick={ () => this.props.handleChange(this)} > {this.props.name} </Btn>
        )
    }
}
