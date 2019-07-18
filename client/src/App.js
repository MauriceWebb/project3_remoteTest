import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home';
import Search from './pages/Search';
import Footer from './components/Footer/index';

class App extends Component {
	state = {
		page: '',
		previousResults: [],
		currentResults: [],
		result: null
	};
	// functions...
	getResult = data => {
		this.setState({ result: data });
	};
	updateResults = data => {
		this.state.previousResults.legnth === 0
			? this.setState({ previousResults: data, currentResults: data })
			: this.setState({
					previousResults: this.state.currentResults,
					currentResults: data
			  });
	};
	getPage = currentPage => {
		this.setState({ page: currentPage });
	};

	render() {
		return (
			<Router>
				<div>
					<Header page={this.state.page} updateResults={this.updateResults}/>
					<Switch>
						<Route exact path='/' render={props => <Home getPage={this.getPage}/>} />
						<Route path='/search' render={props => <Search results={this.state.currentResults} getPage={this.getPage} getResult={this.getResult}/>} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
