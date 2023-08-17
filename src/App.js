import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import Login from './pages/Login';
import { signOut } from "firebase/auth"
import { auth } from './firebase-config';



function App() {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }

  return (
    <div className="App">
    <Navbar isAuth={isAuth} handleSignOut={handleSignOut}/>
    {/* <Outlet setIsAuth={setIsAuth}/> */}
    {!isAuth ? <Login isAuth={isAuth} setIsAuth={setIsAuth}/> : <Outlet/>}
    </div>
  );
}

export default App;
