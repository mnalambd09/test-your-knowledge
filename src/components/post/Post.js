import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    const {id, title, body} = post
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h1>Title: {title}</h1>
            <p>Post Body: {body}</p>
            <Link to={`/post/${id}`}>Visit: {id}</Link>
            <Link to={`/post/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details 2</button>
        </div>
    );
};

export default Post;