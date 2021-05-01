import React, { Component } from 'react';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import Comment  from './blogComment'
import BlogCommentList from './blogCommentList';
import BlogCommentAdd from './blogCommentAdd';
import styled,{ThemeProvider} from 'styled-components'
import {lightTheme , darkTheme , GlobalStyle} from '../theme'

// const StyledApp = styled.div`
// color: ${(props) => props.theme.fontColor}
// `;

class Show extends Component {


    state = {
      board: {},
      key: '',
      // theme:"light"
    };
    // themeToggler = () => {
    //   this.state.theme === "light" ? this.setState({theme:"dark"}) : this.setState({theme:"light"});
    // }
    
  

  componentDidMount() {
    const ref = db.collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          comment: doc.comment,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
   db.collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      // <ThemeProvider theme={this.state.theme === "light" ? lightTheme : darkTheme }>
      // <GlobalStyle />
      // <StyledApp>
      // <div>
      //   hello bavisetti
      //   <button onClick={() => this.themeToggler()}>change theme</button>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Board List</Link></h4>
            <h3 class="panel-title">
              {this.state.board.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.board.description}</dd>
              <dt>Author:</dt>
              <dd>{this.state.board.author}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
           
             <button  class="btn btn-success">Comment</button>
          < BlogCommentAdd key={this.state.key} /> 
          <BlogCommentList comment={this.state.comment} />  
          </div>
        </div>
      </div>
//  </div>
//       </StyledApp>
//       </ThemeProvider>
    );
  }
}

export default  Show;