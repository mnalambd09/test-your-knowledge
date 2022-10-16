import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Catagories/Catagories';
import './Home.css';
import background from '../background.png'

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends.data)
    return (
        <div >
            <div className='header-area'>
                <div className='header-section'>
                    <h1>Test Your Knowledge</h1>
                    <p>GK is essential for everyone; at least the basic level is a must. But it's not a cup of tea for many. We have got you this basic general knowledge test quiz, so find out just how smart you are with this quiz. Do you know as much as everyone else does? The quiz contains pretty general questions, not too easy but not hard either. Just try to score as much as you can, and we'll see how well you score in the end. Best of luck!</p>
                </div>
                <div className='background'>
                    <img src={background} alt="" />
                </div>
            </div>

            <div className='catagories'>
                {
                    friends.data.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>

        </div>
    );
};

export default Friends;