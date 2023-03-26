
export default function Entry({entry, element}){
    return(
        <article className="p-4 my-12 mx-6 grid place-content-center">
            <h2 className="text-4xl text-center md:text-left font-bold p-4">
                {entry.title}
            </h2>
            <div className=" grid md:grid-cols-3 md:max-w-3xl text-center md:text-left py-4">
                <div className="justify-self-center self-center">
                    {element}
                </div>
                <p className="p-4 text-lg md:col-span-2">
                    {entry.description}
                </p>
            </div>
            <code>
                <pre className="py-4 px-8 mx-4 bg-slate-800 border-2 rounded-2xl max-w-xs sm:w-full md:max-w-3xl h-72 overflow-scroll">
                    {entry.code}
                </pre>
            </code>
        </article>
    )
}