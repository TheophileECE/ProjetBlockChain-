import React from 'react';

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
      </div>
      )
    }
  }