import React ,{ useState } from 'react'
import { db } from '../firebase';

 function BlogCommentAdd() {
    

     const blogdate = new Date().toLocaleDateString();


     const [blogcomment , setComment] = useState('');
     const handleComment = (e) => {
         setComment(e.target.value);
     }

  const savecomment = (e) => {
      
      e.preventDefault();
         db.collection("boards").add({
             blogcomment : blogcomment,
             blogdate: blogdate
         })
         .then(() => {
            alert("comment added");
        })
        .catch((error) => {
            alert(error.message);
        });
    
    // else {
    //     alert("Please add a comment");
    // }
}
       return (
        <div>
            <div className="card mt-4 mb-3">
                <div classname ="card-header"><stromg>Comments</stromg></div>
                <div className = "card-body">
                    <textarea  onChange={handleComment} value={blogcomment} name= "comment" className="form-control" placeholder="Add a comment" />
                </div>
             </div> 
             <div>
                 <button onClick={savecomment} className="btn btn-primary mr-3">Add Comment</button>
                <button className="btn btn-warning">Cancle</button>
                 </div>       
        </div>
    );
};
export default BlogCommentAdd;