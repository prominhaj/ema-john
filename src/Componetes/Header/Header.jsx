import logo from '../../assets/images/Logo.svg'
const Header = () => {
    return (
        <header className='bg-[#1C2B35]'>
            <nav className='flex items-center justify-between w-[85%] mx-auto py-[1.2rem]'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className='flex text-white gap-10 font-normal text-opacity-90'>
                    <li><a href="">Order</a></li>
                    <li><a href="">Order Review</a></li>
                    <li><a href="">Manage Inventory</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;