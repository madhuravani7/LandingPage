import './Navbar.scss'
const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo">DAZZ-le</div>
        <ul className="nav-menu">
            <li>home</li>
            <li>explore</li>
            <li>about</li>
            <li className='contact'>content</li>
        </ul>
        <i className="fas fa-bars"></i>
    </div>
  )
}

export default Navbar