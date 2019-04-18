import React from 'react'
import Photo from './Photo'
import Comments from './comments'
const Single = React.createClass({
    render(){
        const i = this.props.posts.findIndex((post)=>post.code === this.props.params.postId)
        const post = this.props.posts[i];
        const postComments = this.props.comments[post.code] || [];
       
        return (
        <div className="single-photo">
            <Photo index = {i} post = {post} {...this.props}/>
            <Comments {...this.props} postComments = {postComments} post = {post}/>
        </div>
        );
    }
})

export default Single;