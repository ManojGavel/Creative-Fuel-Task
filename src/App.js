import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import RootLayout from './components/RootLayout/RootLayout';
import ErrorElement from './components/ErrorElement/ErrorElement';

function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorElement/>,
    children:[{
      index:true,
      element:<Home/>
    }]
  }])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
