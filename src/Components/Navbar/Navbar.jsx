import { useState } from 'react'
import './Navbar.scss'
const Navbar = () => {

  const [menu, setMenu] = useState(false);

  function handleClick (){
    setMenu(!menu)
  }

  return (
    <div className="nav">
        <div className="nav-logo">DAZZ-le</div>
        <ul className={menu ? "nav-menu active" : "nav-menu"}>
            <li>home</li>
            <li>explore</li>
            <li>about</li>
            <li className='contact'>content</li>
        </ul>
        <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  )
}

export default Navbar