import React from 'react'
import Photo from './Photo'

const PhotoGrid = React.createClass({
    render(){
        return (
        <div className="photo-grid">
            {this.props.posts.map((post, index)=>{
                return <Photo { ...this.props } post = {post} key = { index } index = { index }/>
            })}

        </div>
        );
    }
})

export default PhotoGrid;