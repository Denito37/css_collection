import Header from "../components/header"
import Footer from "../components/footer"
import CSS from '/css-icon.svg'
import { Outlet, Link } from "react-router-dom"

export default function Layout(){

    return(
        <>
        <div className="sm:sticky top-0 z-10 bg-[#171717] glass">
        <header className=" sm:flex my-2 mx-4 md:justify-between">
            <img className=' bg-blue-700 mx-auto sm:mx-0 rounded-xl shadow-[0px_15px_50px_3px_rgba(60,100,220,0.8)]' 
                src={CSS} width={75} height={75} alt="CSS Collection" />
            <nav className="">
                <ul className=" grid grid-cols-3 grid-rows-2 sm:grid-rows-1 sm:grid-cols-6 content-center justify-items-center gap-x-2 p-4 max-w-3xl mx-auto overflow-x-scroll">
                    <li className=" w-fit p-2 underlineLink">
                        <Link to='/'>Home</Link>
                    </li>
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
            
            <Outlet />
            <Footer />
        </>
    )
}