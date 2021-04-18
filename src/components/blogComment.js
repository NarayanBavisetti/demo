import React , {Component} from 'react'
// import React from 'react-dom'
import Commentadd from './blogCommentAdd'
import Commentlist from './blogCommentList'

class blogComment extends Component{

handleCommentSubmit(){
    console.log('handleComment');
}

    render(){
    return(
<div>
<Commentadd handleCommentSubmit= {this.handleCommentSubmit} />
{/* <Commentlist /> */}

</div>
    )
}
}

export default blogComment;