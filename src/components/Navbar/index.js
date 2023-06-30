import Ham from '../Menu';
import Swt from '../Switch';
import Logo from '../Logo';
import './navbar.css';

const Navbar = () => (
  <>
    <div className="navbar">
      <div className="navbar_hamburger"><Ham/></div>
      <div className="navbar_logo"><Logo/></div>
      <div className="navbar_switch"><Swt/></div>
    </div>
  </>
);
export default Navbar;