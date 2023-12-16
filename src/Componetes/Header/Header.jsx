import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'
const Header = () => {
    return (
        <header className='bg-[#1C2B35] z-10 sticky top-0 left-0 right-0'>
            <nav className='flex container items-center justify-between mx-auto py-[1.2rem]'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className='flex text-white gap-10 font-normal text-opacity-90'>
                    <li><Link to="/">Order</Link></li>
                    <li><Link to="/orders">Order Review</Link></li>
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;