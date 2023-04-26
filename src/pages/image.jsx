import Entry from "../components/entry"
import { blocks } from "../components/entries/entries"
import { Info,Blur, PopUp } from '../components/elements/images.jsx'
export default function Image(){
    const blockElements = [<Info />, <Blur />, <PopUp />]
    let placement = 0
    const list = blocks.map(block =>{
        return <Entry key={block.id} entry={block} element={blockElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}