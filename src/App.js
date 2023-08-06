import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import RootLayout from './components/RootLayout/RootLayout';
import ErrorElement from './components/ErrorElement/ErrorElement';
import DataTable from './components/Table/DataTable';
import Modal from './components/Modal/Modal';
import { useContextReducer } from './Context/Context';
import { useEffect } from 'react';
import TestType from './components/Table/TestType';

function App() {
  const [state, dispatch] = useContextReducer();
  const router=createBrowserRouter([{
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorElement/>,
    children:[{
      index:true,
      element:<Home/>
    },
    {
      path:'/dataTable',
      element:<DataTable/>
    },
    {
      path:"/testType",
      element:<TestType/>
    }]
  }])
  useEffect(() => {
    console.log(state.tableValues);
  }, [state.tableValues])
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
      { state.isModalOpen && <Modal />}
    </div>
  );
}

export default App;
