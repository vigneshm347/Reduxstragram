import React from 'react'
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
const Photo = React.createClass({
    render(){

        const { post, index, comments } = this.props;
        return (
            <figure className = "grid-figure">
                <div className="grid-photo-wrap">
                    <Link to = {`/view/${post.code}`}>
                        <img src = {post.display_src } alt = {post.caption}/>
                    </Link>
                    <CSSTransitionGroup transitionName="like"
                    transitionLeaveTimeout = {500}
                    transitionEnterTimeout = {500}>
                    <span key={post.likes} className = "likes-heart">
                        {post.likes}
                    </span>
                    </CSSTransitionGroup>
                    
                </div>  
                <figcaption>
                    <p>
                        {post.caption}
                    </p>
                    <div className="control-buttons">
                        <button onClick = {this.props.increment.bind(null, index)} className = "likes">&hearts; {post.likes}</button>
                        <Link to={`/view/${post.code}`} className="button">
                            <span className="comment-count">
                                <span className="speech-bubble">
                                    {comments[post.code] ? comments[post.code].length : 0}
                                </span>
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
})

export default Photo;