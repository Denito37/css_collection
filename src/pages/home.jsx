import Intro from "../components/intro"
import About from "../components/about"
import Purpose from "../components/purpose"
import Target from "../components/target"
export default function Home(){
    return(
        <section>
            <Intro />
            <About />
            <Target />
            <Purpose />
        </section>
    )
}