import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Catagories.css';



const Friend = ({ friend }) => {
    console.log(friend)
    const { name, logo, id, total } = friend
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/friend/${id}`);
    }
    return (
        <div className='friend'>
            <div>
                <img src={logo} alt="" />
                <div className='button-section'>
                    <h4>Name : {name}</h4>
                    <button className='btn-primary' onClick={handleNavigate}>Start Practice : {total} </button>
                </div>
            </div>

        </div>
    );
};

export default Friend;