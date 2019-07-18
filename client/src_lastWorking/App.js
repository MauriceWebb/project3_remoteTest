import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Herbs from "./pages/Herbs";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Home from "./pages/Home";

class App extends Component {

  state = {
    
  }

  render() {

    return (
      // <Router>
      //   <div>
      //     <Nav />
      //     <Switch>
      //       <Route exact path="/" component={Herbs} />
      //       <Route exact path="/herbs" component={Herbs} />
      //       <Route exact path="/herbs/:id" component={Detail} />
      //       <Route component={NoMatch} />
      //     </Switch>
      //   </div>
      // </Router>
  
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
