import Entry from "../components/entry"
import { buttons } from "../components/entries/entries"
import { Trash, Add, Claim, Submit, Cta } from '../components/elements/buttons.jsx'
export default function Button(){
    const btnElements = [<Trash />, <Add />, <Claim />, <Submit />, <Cta />]
    const list = buttons.map(button =>{
        return <Entry key={button.id} entry={button} element={btnElements[button.id-1]} />
    })
    return(
        <>
            {list}
        </>
    )
}