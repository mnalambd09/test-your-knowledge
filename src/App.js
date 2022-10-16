
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      
      path: '/',
      element: <Main></Main>, children: [
        
        
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
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
          element: <Quiz></Quiz>
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
