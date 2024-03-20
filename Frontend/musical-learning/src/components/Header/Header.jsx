import './Header.css';
import Logo from'../../assets/Aplica-Music-Logo.png';
import Navbar_R from '../Navbar_R/Navbar_R';
const Header = () =>{
    return(
        <div className="header">
            <div className="header-logo">
                <img src={Logo} alt="Aplica Music" />
            </div>
            <div className="header-user">
                <Navbar_R/>
            </div>
        </div>
    );   
}
export default Header;