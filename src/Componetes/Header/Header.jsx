import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { userContext } from '../../Auth_Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const {user, logOut} = useContext(userContext);
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true);

    // Toast
    const success = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            success('Log Out SuccessFull')
            navigate('/login')
        })
        .catch(errors => {
            error(errors.message.substr(10))
        })
    }
    return (
        <header className='bg-[#1C2B35] z-10 sticky top-0 left-0 right-0 px-8 md:px-0'>
            <nav className='flex container items-center justify-between mx-auto py-[1.2rem] relative'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <button onClick={() => setMenu(!menu)} className='md:hidden duration-500'>
                    {
                        menu ? <FontAwesomeIcon className='text-white text-3xl' icon={faBars} /> : <FontAwesomeIcon className='text-white text-4xl' icon={faXmark} />
                    }
                    </button>
                    <div onClick={() => setMenu(!menu)} className={`duration-500 absolute md:static md:block ${menu ? 'hidden': 'block text-lg bg-[#1C2B35] md:pt-2 py-10 px-6 md:px-0 rounded right-0 bottom-0 left-0 h-80 md:h-0 top-[80px] md:top-0'}`}>
                        <ul className='flex flex-col items-center md:items-start md:flex-row text-white gap-10 font-normal text-opacity-90'>
                            <li><Link to="/">Order</Link></li>
                            <li><Link to="/orders">Order Review</Link></li>
                            <li><Link to="/inventory">Manage Inventory</Link></li>
                                {
                                    user ? <button onClick={handleLogOut}>Log Out</button> : <li><Link to="/login">Login</Link></li>
                                }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;