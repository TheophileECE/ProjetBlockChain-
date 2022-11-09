import React from 'react';
import { Card } from './Card'

export class PageHome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Title: "home",
      };
    }

    render() {
      return(
      <div>
          <h1>HOME</h1>
          <Card image="./xanalogo.png" title="Test" text="Price: 1000 Golerie" />
      </div>
      )
    }
  }