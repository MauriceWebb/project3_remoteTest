import React, { Component } from "react";
import Main from '../components/Main/index';
import Carousel from '../components/subponents/Carousel/index';
import MediaObject1 from '../components/subponents/MediaObject1/index';
import CardDeck2 from '../components/subponents/CardDeck2/index';
import MediaObject2 from '../components/subponents/MediaObject2/index';

class Home extends Component {
  state = {
    page: 'home'
  };
  
  componentWillMount() {
    this.props.getPage(this.state.page);
  }

  render() {
    return (
      <div>
        <Main>
          <Carousel />
          <MediaObject1 />
          <CardDeck2 />
          <MediaObject2 />
          <MediaObject1 />
        </Main>
      </div>
    );
  }
}

export default Home;
