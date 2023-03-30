import trash from '/trash.svg'
export default function Trash(){
    return(
        <button className="w-fit h-fit p-8 bg-transparent rounded-full scale-90 transition-all duration-200 ease-in hover:bg-cyan-800 hover:scale-100">
                <img src={trash} alt="" />
        </button>
    )
}