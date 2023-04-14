import CSS from '/css-icon.svg'
export default function Home(){

    return(
        <article className=" my-12">
            <div className='p-4'>
                <img className=' bg-blue-700 rounded-3xl shadow-[0px_25px_60px_5px_rgba(60,100,220,0.8)] mx-auto' 
                src={CSS} width={'125px'} height={'125px'} alt="Logo" />
            </div>
            <section className=" p-4 md:max-w-5xl md:p-8 md:mx-auto">
                <h2 className=" text-4xl text-center font-bold md:text-6xl">
                    Spice up your site with
                    <span className=" transition-[color] hover:text-blue-500"> CSS </span>
                </h2>
                <p className=" px-8 py-4 text-center mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                    This is an educational site in a mini-blog format
                    with the goal of showcasing how a little bit of CSS
                    can greatly improve the look & feel of your website.
                </p>
            </section>
        </article>
    )
}