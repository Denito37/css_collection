import Header from "../components/header"
import Footer from "../components/footer"
import { Outlet, Link } from "react-router-dom"

export default function Layout(){

    return(
        <div>
            <Header />
            <nav>
                <ul className=" grid grid-cols-3 grid-rows-2 sm:grid-rows-1 sm:grid-cols-6 justify-items-center gap-x-2 p-4 max-w-3xl mx-auto overflow-x-scroll">
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
            <hr />
            <Outlet />
            <Footer />
        </div>
    )
}