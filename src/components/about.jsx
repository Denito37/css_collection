export default function About(){

    return(
        <article className=" my-12 md:max-w-5xl md:mx-auto">
            <div className="  my-4 items-center justify-items-center flex flex-col md:p-8">
                    <h2 className=" p-2 text-3xl text-center font-bold">
                        About
                    </h2>
                    <p className=" px-8 py-4 mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                        This is an educational website in a mini-blog format
                        to showcase how a little bit of CSS
                        can greatly improve the look & feel of your website.
                        I created this site because I enjoy using
                        CSS, but I've heard many new developers struggle 
                        with CSS & how to use it effectively. 
                    </p>
            </div>
        </article>
    )
}