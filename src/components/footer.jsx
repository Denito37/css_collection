
export default function Footer(){

    return(
        <footer className=" p-4 font-bold  sm:grid sm:grid-rows-3 sm:p-8">
            <h2 className="text-lg text-center p-1">
                    <a className=" p-2 rounded-lg hover:bg-slate-100 hover:text-zinc-900 transition-all duration-300" href="https://dev-portfolio-denito37.vercel.app" target="_blank" rel="noopener noreferrer">
                        Portfolio
                    </a> 
                </h2>
                <h2 className="text-lg text-center p-1">
                    <a className=" p-2 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </h2>
                <h2 className=" text-lg text-center p-1">
                    <a  className=" p-2 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                </h2>
        </footer>
    )
}