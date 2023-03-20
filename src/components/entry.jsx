import copy from "/copy.svg"

export default function Entry({entry, element}){
    return(
        <article className="p-4 m-8 grid place-content-center">
            <h2 className="text-4xl font-bold p-4">
                {entry.title}
            </h2>
            <div className=" grid md:grid-cols-3 md:max-w-3xl py-4">
                <div className="justify-self-center self-center">
                    {element}
                </div>
                <p className="p-4 text-lg md:col-span-2">
                    {entry.description}
                </p>
            </div>
            <code>
            <pre className="p-4 mx-4 bg-slate-800 border-2 rounded-2xl max-w-sm sm:max-w-lg md:max-w-3xl h-72 overflow-scroll relative">
                {entry.code}
                <img className=" absolute top-0 right-0 p-2" src={copy} alt="" />
            </pre>
            </code>
        </article>
    )
}