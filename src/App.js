import{useContext, useState} from 'react'
import { BrowserRouter, Routes, Route,Switch } from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
import SharedLayout from './components/SharedLayout';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Single from './pages/Single';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Write from './components/Write';
import About from './pages/About';  
  import { Context, ContextProvider } from './context/Context';
import './App.css';
function App() {
  const {user }= useContext(Context);
  return (

   <BrowserRouter>
      <Routes>
     <Route exact path='/' element={<SharedLayout />}>
         <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/write' element={user ? <Write/>: <Login/>} />
         <Route path='/register' element={user ?< Home/>: <Register/>}/>
        <Route path='/settings' element={user ? <Settings/>:<Register/>} />
         <Route path='/login' element={user ?< Home/>: <Login />} />  
         <Route path='*' element={<Error/>} /> 
         <Route path='/post/:postId' element={<Single/>} />
        </Route>
</Routes>
   </BrowserRouter>
      

   
  );
}

export default App;