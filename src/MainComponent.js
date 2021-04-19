import React,{Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import Edit from "./components/edit";
import Create from "./components/create";
import Show from "./components/show";

class Main extends Component {
  render() {
    return (
        <React.Fragment>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
          <Route path="/show/:id" component={Show} />
        </div>
      </Router>
      </React.Fragment>
    );
  }
}
export default Main;