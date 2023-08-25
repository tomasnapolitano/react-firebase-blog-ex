import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { createContext, useContext, useState } from 'react';
import Login from './pages/Login/Login';
import { signOut } from "firebase/auth"
import { auth } from './firebase-config';

export const authContext = createContext(null);

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
    <authContext.Provider value={{isAuth, setIsAuth}}>
      <div className="App">
        <Navbar handleSignOut={handleSignOut}/>
        {/* <Outlet setIsAuth={setIsAuth}/> */}
        {/* {!isAuth ? <Login isAuth={isAuth} setIsAuth={setIsAuth}/> : <Outlet/>} */}
        <Outlet />
      </div>
    </authContext.Provider>
  );
}

export default App;
