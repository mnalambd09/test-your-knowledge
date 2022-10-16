import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Question/Questions';
import './Quiz.css'

const Quiz = () => {
    const friend = useLoaderData();
    console.log(friend.data.questions)
    return (
        <div className='quiz'>
            {
                friend.data.questions.map(questions => <Questions
                    key={questions.id}
                    questions={questions}
                    

                ></Questions>)
               
            }
        
        </div>
    );
};

export default Quiz;