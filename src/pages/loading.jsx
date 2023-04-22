import Entry from "../components/entry"
import { loading } from "../components/entries/entries"
import { Spinner, Skeleton} from '../components/elements/loadings.jsx'
export default function Loading(){
    const loadElements = [<Spinner />, <Skeleton />]
    const list = loading.map(load =>{
        return <Entry key={load.id} entry={load} element={loadElements[load.id-1]} />
    })
    return(
        <>
        {list}
        </>
    )
}