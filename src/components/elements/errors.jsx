export function ErrorMessage(){
    return(
        <div className=" p-3 bg-red-200 grid grid-cols-6 items-center rounded-2xl border border-red-500">
            <button className=" text-xl text-red-800 ">X</button>
            <h2 className=" text-2xl text-red-500 col-span-5 animate-pulse"> Error Message</h2>
        </div>
    )
}