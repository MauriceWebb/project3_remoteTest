import React, { Component } from "react";
import Main from '../components/Main/index';
import SearchResults from '../components/subponents/SearchResults/index';

class Search extends Component {
  state = {
    page: 'searchResults'
  };
  
  componentWillMount() {
    this.props.getPage(this.state.page);
  }

  render() {
    return (
      <div>
        <Main>
            <SearchResults results={this.props.results.data} getResult={this.props.getResult}/>
        </Main>
      </div>
    );
  }
}

export default Search;
