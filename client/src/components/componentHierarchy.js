// this is not a file to be executed. This just serves as a *note to self* for component hieracrchy in json format...

// components have a capital letter at start of key...
// props will be prefixed with `prop_`...

const hieracrchy = {
    App: {
        state: {
            page: '',
						previousResults: [],
						currentResults: [],
						result: null
        },
				getResult: (data) => {this.setState({result: data})},
				updateResults: (data) => {this.state.previousResults.legnth === 0 ? this.setState({previousResults: data, currentResults: data}) : this.setState(previousResults: this.state.currentResults, currentResults: data)}
        getPage: (currentPage) => {this.setState({page: currentPage})},
				// getResults: (data) => {this.setState({results: data})}
        Header: {
            state: {
                page: this.prop.page,
								latestQuery:''
            },
					getLatestQuery: (query) => {this.setState({latestQuery: query})},
					prop_page: App.this.state.page
            Nav: {
                state: {
                    // loggedIn: false,
                    userData: null
                },
								prop_page: Header.this.state.page,
                logIn: (credentials) => {/*take the returned data and query db.Users for all of the user data......then return that userData back to the state...*/...then(user => this.setState({userData: user}))},
                subscribe: (data)=> {/*take returned data and create a new user in db.Users...then return that new userData back to the state...*/...then(newUser => this.setState({userData: newUser}))},
                LogInModal: {
                    prop_logIn: this.logIn(credentials) // here we take the captured input and pass it into this function to query db.User...
                },
                SubscribeModal: {
                    prop_subscribe: Nav.this.subscribe(data) // here we take the captured user input and pass it into the function to be sent to db.User...
                },
								Profile: {
									state: {
										userData: this.prop.userData
									},
									prop_userData: Nav.this.state.userData
								}
            },
						// the Jumbotron and Searchbar components will be rendered dynamically based on this.prop.page...the algorithm looks like:
							// {this}
            Jumbotron,
            SearchBar: {
							state: {
								previousQuery: '',
								currentQuery: ''
							},
							updateQuery: (query) => { this.state.previousQuery === '' ? this.setState({previousQuery: query, currentQuery: query}) : this.setState({previousQuery: this.state.currentQuery, currentQuery: query}) },
							prop_updateResults: App.this.updateResults(data), // here we pass the data returned from the query into the function...
							prop_getLatestQuery: Header.this.getLatestQuery(query) // here we capture the user's input as `query` and pass it into this function...
						}
        },
        Router: {
            Switch: {
                Route: {
                    Home: {
                        state: {
                            page: 'home'
                        },
                        prop_getPage: App.this.getPage(this.state.page)
                    },
                    SearchResults: {
                        state: {
                            page: 'searchResults',
														results: this.prop.results
                        },
												prop_results: App.state.currentResults,
                        prop_getPage: App.this.getPage(this.state.page),
												prop_getResult: App.this.getResult(clickedResult) // here we passed in the clicked results data. We will need to handle this with some function...
                    },
										Result: {
												state: {
													page: 'result',
													result: this.prop.result
												},
												prop_result: App.this.state.result
										}
                }
            }
        },
        Footer
    }
};