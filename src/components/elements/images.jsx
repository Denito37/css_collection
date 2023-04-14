import orange from '/orange.jpg'
import egg from '/egg.jpg'
export function Info(){
    return(
        <div className=' relative rounded-2xl w-[150px] h-[150px]'>
        <img className=' rounded-2xl' src={orange} width={"150px"} height={"150px"} alt=" orange picture " />
        <p className='absolute px-6 text-sky-800 text-center text-xs bottom-[20%]'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    )
}
export function Blur(){
    return(
        <>
            <img className=' rounded-2xl blur-sm sepia-[25%] transition-[filter] duration-200 ease-in hover:blur-0 hover:sepia-0' src={egg} width={"150px"} height={"150px"} alt=" egg picture " />
        </>
    )
}
