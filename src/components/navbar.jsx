import { Link } from "react-router";
import logo from '../assets/logo.png'

function Navbar(){
    return(
        <>
        <nav className="h-15 text-lg">
            <ul className="flex gap-8 align-middle">
                <li className="w-3/4">
                    <img src={logo} style={{width:"70px"}} alt="" />
                </li>
                <li className="hover:text-gray-600">
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact  </Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;