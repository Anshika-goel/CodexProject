import { TableSortLabel } from '@material-ui/core';
import { useRoutes } from 'react-router-dom';
import './App2.css'
import Cards from '../components/Cards/Cards';
import RightSide from '../components/RigtSide/RightSide';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table/Table'
import MainDash from "../components/MainDash/MainDash"
import { QueryClient, QueryClientProvider } from 'react-query';
import Comply from '../components/Comply/comply';
import React from 'react';

const MainRoutes =[
  { path: '/dashboard', element: <MainDash />},
  { path: '/comply', element: <Comply/>},
]


function App() {
  const mainRouting = useRoutes(MainRoutes)
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider  client={queryClient}>
     <div className="App">
      <div className="AppGlass"> 
        <Sidebar/> 
        {mainRouting}
        <RightSide/>
       </div>
    </div>
    </QueryClientProvider>

  );
}

export default App;
