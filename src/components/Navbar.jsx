import { Link, useNavigate } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = ({ token, setToken }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setToken(null);
        navigate("/login");
    }

    return (
        <nav className="navbar">
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to="/products">🧼 Meet the Flock</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    {token ? (
                        <li><button onClick={handleLogout}>Logout</button></li>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
        </nav>
    )
};
export default Navbar;