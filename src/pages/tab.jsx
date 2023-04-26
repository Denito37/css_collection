import Entry from "../components/entry"
import { tabs } from "../components/entries/entries"
import { Highlight, Inverse, Bold, Underline, Border } from '../components/elements/tabs.jsx'
export default function Tab(){
    const tabElements = [<Highlight />, <Inverse />, <Bold />, <Underline />, <Border />]
    let placement = 0
    const list = tabs.map(tab =>{
        return <Entry key={tab.id} entry={tab} element={tabElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}