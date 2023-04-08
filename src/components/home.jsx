import CC from '/CC.svg'
export default function Home(){

    return(
        <article className=" my-8">
            <div className=' p-4'>
                <img className=' rounded-2xl shadow-[0_30px_60px_-10px_rgba(60,100,170,0.8)] mx-auto' 
                src={CC} width={'125px'} height={'125px'} alt="Logo" />
            </div>
            <section className=" p-4 md:max-w-5xl md:p-8 md:mx-auto">
                <h2 className=" text-4xl text-center font-bold md:text-6xl">
                    Upgrade your site with
                    <span className=" transition-[color] hover:text-sky-500"> CSS </span>
                </h2>
                <p className=" px-8 py-4 text-center mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                    This is a an educational site in a mini-blog format
                    with the goal of showcasing how a little bit of CSS
                    can greatly improve the look & feel of your website.
                </p>
            </section>
            <p className=" text-center p-8">
                <span className=" font-bold">Note: </span>  
                In CSS a little goes a long way
            </p>
        </article>
    )
}