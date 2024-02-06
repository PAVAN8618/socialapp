import { useState } from "react";
import { auth, provider} from '../firebase/config'
import { signInWithPopup, signOut } from "firebase/auth";
import { Link, NavLink} from "react-router-dom"

 function Header() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);

  function handleLogin(){
    signInWithPopup(auth, provider).then((result) =>{
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    })
    
  }
  function handleLogout(){
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }
  return (
    <header>
      <Link to='/' className='logo'>
      <img src="https://d3nn873nee648n.cloudfront.net/900x600/20620/300-PA1061529.jpg" alt="logo"/>
      <span>Myblog</span>
      </Link>
      <nav className="nav">
        <NavLink to='/' className='link' end>Home</NavLink>
    {isAuth ?(
      <>
        <NavLink to="/create" className="link">Create</NavLink>
        <button onClick={handleLogout} className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button> 
      </>
    ):(
      <button onClick={handleLogin} className="auth"><i className="bi bi-google"></i> Login</button>

    )}

      </nav>

    </header>
  )
}

export default Header