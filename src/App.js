
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './components/About/About';
import Main from './layout/Main';
import Home from './components/Home/Home';
import FriendDetails from './components/FriendDetails/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, children: [
        
        
        { path: '/about', element: <About></About> },
        {
          path: '/Home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            // console.log(params.friends)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
       
      ]
    },
    { path: '*', element: <div><h1>Sorry This Page Not Found</h1></div> },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
