import CSS from '/css-icon.svg'
export default function Intro(){

    return(
        <article className=" my-12 p-6 md:max-w-5xl md:mx-auto">
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