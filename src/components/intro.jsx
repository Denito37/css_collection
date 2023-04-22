import CSS from '/css-icon.svg'
export default function Intro(){

    return(
        <article className=" my-12 md:max-w-5xl md:mx-auto">
            <img className=' bg-blue-700 rounded-3xl shadow-[0px_25px_60px_5px_rgba(60,100,220,0.8)] mx-auto' 
                src={CSS} width={'125px'} height={'125px'} alt="CSS" />
                <h2 className=" pt-6 pb-3 text-4xl text-center font-bold md:text-6xl">
                    Spice up your site with
                    <span className=" transition-[color] hover:text-blue-500"> CSS </span>
                </h2>
                <p className=" p-2 text-center mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                    A collection of components that showcases the power of CSS
                </p>
        </article>
    )
}