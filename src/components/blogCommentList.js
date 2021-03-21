import React, { useState,useEffect } from 'react'
import blogComment from './blogComment';
import { db } from '../firebase';
import Moment from 'moment';

function BlogCommentList () {
    const [blogedit, setblogs] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            db.collection("boards")
                .onSnapshot(function (data) {
                    setblogs(data.docs.map(doc => ({
                        ...doc.data(), id: doc.id
                    })));
                })
        }
        fetchdata();
    }, []);
    

    
        return (
            <div>
                 {
                blogedit.map(Blogs => {
                       <div>
                           {Moment(Blogs.blogdate).format('ll')} 
                           {Blogs.blogComment}
                           
                       </div> 
                    
                })
            }

        </div>
                )
  
}

export default BlogCommentList;
