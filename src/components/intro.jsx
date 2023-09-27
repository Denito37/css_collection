import CSS from '/css-icon.svg'
export default function Intro(){

    return(
        <article className=" my-12 p-6 md:max-w-5xl md:mx-auto">
            <img className=' mx-auto' width={150} src={CSS} alt="vector image of the CSS logo" />
                <h2 className=" pt-6 pb-3 text-4xl text-center font-bold md:text-6xl">
                    Enhance your site with
                    <span className=" transition-[color] hover:text-blue-500"> CSS </span>
                </h2>
                
        </article>
    )
}