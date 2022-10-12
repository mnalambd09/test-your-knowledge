import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div>
            <h1>Hello From Post</h1>
            {
                posts.map(post => <Post 
                    key={post.id}
                    post={post}
                    ></Post>)
            }
        </div>
    );
};

export default Posts;