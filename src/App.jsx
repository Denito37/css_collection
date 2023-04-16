import { buttons, tabs, blocks, errs, loading } from './components/entries/entries.js'
import { useState } from 'react'
import Header from './components/header'
import Home from './components/home'
import Entry from './components/entry'
import Footer from './components/footer'
import { Trash, Add, Claim, Submit, Cta } from './components/elements/buttons.jsx'
import { Highlight, Inverse, Bold, Underline, Border } from './components/elements/tabs.jsx'
import { Info,Blur, PopUp } from './components/elements/images.jsx'
import { Spinner, Skeleton} from './components/elements/loadings.jsx'
import { ErrorMessage } from './components/elements/errors.jsx'

function App() {
  const [page, setPage] = useState('home')
  const [active, setActive] = useState('home')
  let list
  let key = 0;
  const pages = ['home','buttons','images','tabs','errors','loading']
  const btnElementArray = [<Trash />, <Add />, <Claim />, <Submit />, <Cta />]
  const tabElementArray = [<Highlight />,<Inverse />,<Bold />,<Underline />, <Border />] 
  const blockElementArray = [<Info />,<Blur />,<PopUp />]
  const errElementArray = [<ErrorMessage />,]
  const loadElementArray = [<Spinner />, <Skeleton />,]

const navList = pages.map( page => (
  <button key={key++} 
          className=" p-4 mx-2 capitalize rounded-2xl min-w-[6rem] w-fit" 
          onClick={() => {setPage(page); setActive(page)}} 
          style={active === page ? {backgroundColor: "#fefefe",color: "#111"} : {backgroundColor: "#111",color: "#fefefe"}}>
    {page}
  </button>
))
function sectionFilter(section, element){
  list = section.map(sec => {
    return <Entry key={sec.id} entry={sec} element={element[sec.id-1]} />
  })
}
if(page === 'home'){list = <Home />}
if(page === 'buttons'){sectionFilter(buttons, btnElementArray);}
if(page === 'images'){sectionFilter(blocks,blockElementArray)}
if(page === 'tabs'){sectionFilter(tabs,tabElementArray)}
if(page === 'errors'){sectionFilter(errs,errElementArray)}
if(page === 'loading'){sectionFilter(loading,loadElementArray)}

  return (
    <div>
      <Header />
      <div className=" overflow-x-scroll flex p-2 mx-auto sm:max-w-3xl justify-items-center">
        {navList}
      </div>
      <hr />
      {list}
      <Footer />
    </div>
  )
}

export default App
