import trash from '/trash.svg'

export default function Entry({element}){
    return(
        <article className="p-4 m-8 grid place-content-center">
            <h2 className="text-4xl font-bold p-4">{element.title}</h2>
            <div className="grid grid-cols-3 max-w-xl md:max-w-3xl py-4">
                <button className="w-fit h-fit p-8 bg-transparent rounded-2xl scale-90 transition-all duration-200 ease-in hover:bg-cyan-300 hover:scale-100 justify-self-center self-center">
                    <img src={trash} alt="" />
                </button>
                <p className="p-4 text-lg col-span-2">{element.description}</p>
            </div>
            <code>
            <pre className="p-4 mx-4 bg-slate-800 border-2 rounded-2xl max-w-sm md:max-w-3xl h-72 overflow-scroll"> {element.code}</pre>
            </code>
        </article>
    )
}