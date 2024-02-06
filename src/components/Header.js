import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

 function Header() {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogin(){
    setIsAuth(true);
  }
  function handleLogout(){
    setIsAuth(false);
  }
  return (
    <header>
      <Link to='/' className='logo'>
      <img src="https://source.unsplash.com/random/200x200?sig=1" alt="logo"/>
      <span>Myblog</span>
      </Link>
      <nav>
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