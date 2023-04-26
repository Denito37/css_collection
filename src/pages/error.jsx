import Entry from "../components/entry"
import { errs } from "../components/entries/entries"
import { ErrorMessage } from '../components/elements/errors.jsx'
export default function Error(){
    const errorElements = [<ErrorMessage />]
    let placement = 0
    const list = errs.map(err =>{
        return <Entry key={err.id} entry={err} element={errorElements[placement++]} />
    })
    return(
        <section>
            {list}
        </section>
    )
}