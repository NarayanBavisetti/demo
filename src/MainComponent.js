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
import Nothing from "./components/nothing";
import No from './components/nothingfunction'
import styled,{ThemeProvider} from 'styled-components'
import {lightTheme , darkTheme , GlobalStyle} from './theme'

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor}
`;

class Main extends Component {
  state= {
    theme:"light"
  }

themeToggler = () => {
  this.state.theme === "light" ? this.setState({theme:"dark"}) : this.setState({theme:"light"});
}


  render() {
    return (
      <ThemeProvider theme={this.state.theme === "light" ? lightTheme : darkTheme }>
        <React.Fragment>
      <Router>
        <GlobalStyle />
        <StyledApp>
        <div>
          hello bavisetti
          <button onClick={() => this.themeToggler()}>change theme</button>
         
          <Route exact path="/" component={App} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
          <Route path="/show/:id" component={Show} />
          <Route path="/class" component={Nothing} />
          <Route path="/function" component={No} />
        </div>
        </StyledApp>
      </Router>
      </React.Fragment>
      </ThemeProvider>
    );
  }
}
export default Main;