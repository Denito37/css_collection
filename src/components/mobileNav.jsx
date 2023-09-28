
import { Link } from "react-router-dom"
export default function MobileNav (){
    return(
        <nav className="">
                <ul className=" sm:hidden bg-slate-800 p-8 max-w-[80vw]  h-[100vh]">
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
    )
}