import React from 'react';
import './Questions.css'
import Choise from '../Option/Choise';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';



const Questions = ({ questions }) => {
    const { question, options, correctAnswer, id } = questions
    const notify = () => toast.success(correctAnswer, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return (
        <div className='quiz-section'>
            <div className='question'>
                <p>Question : {question}</p>
                <FontAwesomeIcon icon={faEye} onClick={notify} />
            </div>
            <div className='multiple'>

                {
                    options.map(multiple => <Choise
                        key={multiple.id}
                        multiple={multiple}
                        id ={id}
                    ></Choise>
                    )
                }
            </div>

        </div>
    );
};

export default Questions;