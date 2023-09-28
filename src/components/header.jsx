import CSS from '/css-icon.svg'
import menu from '/menu.svg'
import close from '/clear-icon.svg'
import MobileNav from './mobileNav';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Header(){
    let navigate = useNavigate(); 
    const location = useLocation();
    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
    setShowNav(!showNav)
    console.log(showNav);
    }
    useEffect( () =>{
        setShowNav(false)
    },[location])

    return(
        <div className="sticky top-0 z-10 bg-[#171717] glass">
        <header className=" sm:flex my-2 mx-4 md:justify-between">
            <img onClick={() => navigate('/')} className=' bg-blue-700 mx-auto sm:mx-0 rounded-xl shadow-[0px_15px_50px_3px_rgba(60,100,220,0.8)]' 
            src={CSS} width={75} height={75} title='Home' alt="CSS Collection" />

            <button onClick={() => toggleNavItems()} className='sm:hidden'>
                {showNav == false ?
                <img src={menu} width={50} height={50} alt="open menu button" title='open menu' />
                 : <img src={close} width={50} height={50} alt='close menu button' title='close menu'  />}
            </button>
            <div className={`${showNav == true ? 'block' : 'hidden'}`}>
            <MobileNav />
            </div>
            
            <nav className="">
                <ul className=" hidden sm:grid grid-cols-3 grid-rows-2 sm:grid-rows-1 sm:grid-cols-5 content-center justify-items-center gap-x-2 p-4 max-w-3xl mx-auto overflow-x-scroll">
                    <li className=" w-fit p-2 underlineLink ">
                        <Link to='/button'>Buttons</Link>
                    </li>
                    <li className=" w-fit p-2 underlineLink">
                        <Link to='/tab'>Tabs</Link>
                    </li>
                    <li className=" w-fit p-2 underlineLink">
                        <Link to='/image'>Images</Link>
                    </li>
                    <li className=" w-fit p-2 underlineLink">
                        <Link to='/error'>Errors</Link>
                    </li>
                    <li className=" w-fit p-2 underlineLink">
                        <Link to='/loading'>Loading</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <hr />
        </div>
    )
}