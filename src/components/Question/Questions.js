import React from 'react';
import './Questions.css'
import Choise from '../Option/Choise';

const Questions = ({ questions }) => {
    const { question, options } = questions
    return (
        <div className='quiz-section'>
            <div className='question'>
                <p>Question : {question}</p>
                
            </div>
            <div className='multiple'>
            
                {
                    options.map(multiple =>  <Choise
                        multiple={multiple}
                    ></Choise>
                    )
                }
            </div>

        </div>
    );
};

export default Questions;