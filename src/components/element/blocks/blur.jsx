import egg from '/egg.jpg'
export default function Blur(){
    return(
        <>
            <img className=' rounded-2xl blur-sm sepia-[25%] transition-[filter] duration-200 ease-in hover:blur-0 hover:sepia-0' src={egg} width={"150px"} height={"150px"} alt=" egg picture " />
        </>
    )
}