import loading from '/loading.svg'
export default function Spinner(){
    return(
        <>
            <img className=' animate-spin motion-reduce:animate-none' src={loading} alt="loading-spinner" width={'150px'} height={'150px'} />
        </>
    )
}