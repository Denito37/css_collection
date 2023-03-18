import add from "/add.svg"
export default function Add(){
    return(
        <button className="w-fit h-fit p-8 bg-transparent transition-all duration-200 ease-in hover:translate-y-[-0.5rem] justify-self-center self-center">
            <img src={add} alt="" />
        </button>
    )
}