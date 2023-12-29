import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { userContext } from '../../Auth_Context/AuthContext';

const Header = () => {
    const {user, logOut} = useContext(userContext);

    // Toast
    const success = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            success('Log Out SuccessFull')
        })
        .catch(errors => {
            error(errors.message.substr(10))
        })
    }
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
                    {
                        user ? <button onClick={handleLogOut}>Log Out</button> : <li><Link to="/login">Login</Link></li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;