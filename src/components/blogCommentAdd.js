// import { render } from '@testing-library/react';
// import React ,{ useState } from 'react'
// import { db } from '../firebase';


// class BlogCommentAdd extends Component {

//     constructor() {
  
//       this.ref = db.collection('boards');
//       this.state = {
//         blogcomment: '',
//         blogdate : '',
//         blogid: '',
//         key: ''
//       };
//     }
//     onChange = (e) => {
//       const state = this.state
//       state[e.target.name] = e.target.value;
//       this.setState(state);
//     }
  
//     savecomment = (e) => {
//       e.preventDefault();
  
//       const {  blogcomment, blogdate,blogid  } = this.state;
  
//       this.ref.add({
//         blogcomment,
//          blogdate,
//          blogid
//       }).then((docRef) => {
//         this.setState({
//             blogcomment:'',
//             blogdate:'',
//             blogid:''
//         });
//         this.props.history.push("/")
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//     }

    

//      const blogdate = new Date().toLocaleDateString();
//      const key = props.key;

//      const [blogcomment , setComment] = useState('');
//      const handleComment = (e) => {
//          setComment(e.target.value);
//      }

//   const savecomment = (e) => {
      
//       e.preventDefault();
//          db.collection("Comments").add({
//              blogcomment : blogcomment,
//              blogdate: blogdate,
//              blogid : key
//          })
//          .then(() => {
//             alert("comment added");
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
    
//     // else {
//     //     alert("Please add a comment");
//     // }
// render(){
//        return (
//         <div>
//             <div className="card mt-4 mb-3">
//                 <div classname ="card-header"><stromg>Comments</stromg></div>
//                 <div className = "card-body">
//                     <textarea  onChange={handleComment} value={blogcomment} name= "comment" className="form-control" placeholder="Add a comment" />
//                 </div>
//              </div> 
//              <div>
//                  <button onClick={savecomment} className="btn btn-primary mr-3">Add Comment</button>
//                 <button className="btn btn-warning">Cancle</button>
//                  </div>       
//         </div>
//     );
//        }
// };
// export default BlogCommentAdd;