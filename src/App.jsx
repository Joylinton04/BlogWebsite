import React from 'react'
import AppRoute from './route/AppRoute';
import './layout/home/Home.css'
import Navbar from './component/Navbar';


const App = () => {
  return (
    <div className='app'>
       <Navbar/>
       <AppRoute/>
    </div>
  )
}

export default App;