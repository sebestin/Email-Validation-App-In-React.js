import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import MainHeader from './Components/MainHeader/MainHeader';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  useEffect(()=>{
    const storedInfo = localStorage.getItem("isLogged");
    if(storedInfo==="1")
    {
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler =(email,password) =>{
    setIsLoggedIn(true);
  };

  const logoutHandler = ()=>
  {
    setIsLoggedIn(false);
    localStorage.removeItem("isLogged","0");
  };




  return (
   <React.Fragment>
     <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}></MainHeader>

     <main>
       {!isLoggedIn && <Login onLogin={loginHandler}></Login>}

      {/* <Login></Login> */}

       {isLoggedIn && <Home onLogout={logoutHandler}></Home>}
     </main>
   </React.Fragment>
  );
}

export default App;
