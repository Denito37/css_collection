import Header from "../components/header"
import Footer from "../components/footer"
import { Outlet, Link } from "react-router-dom"

export default function Layout(){

    return(
        <div>
            <Header />
            <nav>
                <ul className=" flex gap-x-2 p-4 justify-evenly max-w-3xl mx-auto overflow-x-scroll">
                    <li className=" p-2 rounded-xl transition-colors hover:bg-slate-50 hover:text-zinc-900">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className=" p-2 rounded-xl transition-colors hover:bg-slate-50 hover:text-zinc-900">
                        <Link to='/button'>Buttons</Link>
                    </li>
                    <li className=" p-2 rounded-xl transition-colors hover:bg-slate-50 hover:text-zinc-900">
                        <Link to='/tab'>Tabs</Link>
                    </li>
                    <li className=" p-2 rounded-xl transition-colors hover:bg-slate-50 hover:text-zinc-900">
                        <Link to='/image'>Images</Link>
                    </li>
                    <li className=" p-2 rounded-xl transition-colors hover:bg-slate-50 hover:text-zinc-900">
                        <Link to='/error'>Errors</Link>
                    </li>
                    <li className=" p-2 rounded-xl transition-colors hover:bg-slate-50 hover:text-zinc-900">
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