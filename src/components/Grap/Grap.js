import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Grap.css'

const Grap = () => {
    const friends = useLoaderData();
    return (

        <div className='graph'>
            <div>
                <h1>Graph chart of total quiz questions</h1>
                <LineChart width={600} height={300} data={friends.data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>

        </div>
    );
};

export default Grap;