import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <ToastContainer
             position="top-center"
             autoClose={8000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="colored"></ToastContainer>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;