
export default function Header(){

    return(
        <header>
            <h1 className=" text-4xl p-2 my-2 mx-4 font-bold">
                CSS Collection
            </h1>
            <nav className=" grid grid-cols-4 p-2 mx-auto max-w-lg justify-items-center">
                <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500">
                    Home
                </button>
                <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500">
                    Buttons
                </button >
                <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500">
                    Tabs
                </button>
                <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500">
                    Blocks
                </button>
            </nav>
            <hr />
        </header>
    )
}