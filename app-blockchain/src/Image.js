import React from 'react';

export class Image extends React.Component {
    render() {
        return (
            <img src={this.props.src} 
            width={this.props.width} 
            height={this.props.height}
            onClick={() => this.props.handleClick(this)} />
        )
    }
}