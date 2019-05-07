import React from 'react';

class Nba extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3600/games/nba')
      .then(response => response.json())
    // .then(data => this.setState({ hits: data.hits }));
  }

  render() {

    return (
      <div>nba</div>
    );

  };
}

export default Nba;