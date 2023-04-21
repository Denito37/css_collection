import CSS from '/css-icon.svg'
import CC from '/CC.svg'
export default function Home(){

    return(
        <article className=" my-12 md:max-w-5xl md:mx-auto">

            <section className=" my-10 ">
            <img className=' bg-blue-700 rounded-3xl shadow-[0px_25px_60px_5px_rgba(60,100,220,0.8)] mx-auto' 
                src={CSS} width={'125px'} height={'125px'} alt="CSS" />
                <h2 className=" pt-6 pb-3 text-4xl text-center font-bold md:text-6xl">
                    Spice up your site with
                    <span className=" transition-[color] hover:text-blue-500"> CSS </span>
                </h2>
                <p className=" p-2 text-center mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                    A collection of components that showcases the power of CSS
                </p>
            </section>

            <section className="  my-4 items-center justify-items-center flex flex-col md:p-8">
                    <h2 className=" p-2 text-2xl text-center font-bold">
                        About
                    </h2>
                    <p className=" px-8 py-4 mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                        This is an educational website in a mini-blog format
                        to showcase how a little bit of CSS
                        can greatly improve the look & feel of your website.
                        I created this site because I enjoy using
                        CSS, but I've heard that many new developers struggle 
                        with CSS & how to use it well enough to make a 
                        good-looking website. 
                    </p>
            </section>

            <section className="  my-4 md:p-8">
                <h2 className=" text-2xl text-center font-bold">
                    How to Use
                </h2>
                <p className=" px-8 py-4 mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                    Each page is dedicated to a common component in nearly all applications
                    so that if you struggle with one you can easily get the help
                    you want. I would recommend to copying the CSS into your projects
                    & edit the values to play with the CSS & increase your understanding
                    of how each element property can make a component look & function better
                </p>
            </section>

        </article>
    )
}