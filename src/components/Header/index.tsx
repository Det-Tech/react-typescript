import { FC } from 'react';
import "./style.css";

const Header: FC = () => {
    return (
        <header className='header'>
            <div>
            </div>
            <div className='nav-buttons'>
                <a href='#' className='hover:text-[#1c39c2]'>Fan Tokens</a>
                <a href='#' className='hover:text-[#1c39c2]'>Sports Teams</a>
                <a href='#' className='hover:text-[#1c39c2]'>Blog</a>
            </div>
            <div className='flex gap-[16px] justify-end'>
                <button className='primary-button'>Register</button>
                <button className='secondary-button'>Login</button>
            </div>
        </header>
    );
};

export default Header;
