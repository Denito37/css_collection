import { buttons, tabs, blocks, errs, loading } from './components/entries/entries.js'
import { useState } from 'react'
import Header from './components/header'
import Home from './components/home'
import Entry from './components/entry'
import Footer from './components/footer'
import Trash from './components/element/buttons/trash.jsx'
import Add from './components/element/buttons/add.jsx'
import Claim from './components/element/buttons/claim.jsx'
import Submit from './components/element/buttons/submit.jsx'
import Cta from './components/element/buttons/cta.jsx'
import Highlight from './components/element/tabs/highlight.jsx'
import Inverse from './components/element/tabs/inverse.jsx'
import Bold from './components/element/tabs/bold.jsx'
import Underline from './components/element/tabs/underline.jsx'
import Border from './components/element/tabs/border.jsx'
import Info from './components/element/blocks/info.jsx'
import Blur from './components/element/blocks/blur.jsx'
import Spinner from './components/element/loads/spinner.jsx'
import Skeleton from './components/element/loads/skeleton.jsx'
import NotFound from './components/element/errs/notFound.jsx'

function App() {
  const [page, setPage] = useState('home')
  const [active, setActive] = useState('home')
  let list
  let key = 0;
  const sections = ['home','buttons','images','tabs','errors','loading']
  const btnElementArray = [<Trash />, <Add />, <Claim />, <Submit />, <Cta />]
  const tabElementArray = [<Highlight />,<Inverse />,<Bold />,<Underline />, <Border />] 
  const blockElementArray = [<Info />,<Blur />]
  const errElementArray = [<NotFound />,]
  const loadElementArray = [<Spinner />, <Skeleton />,]

const btnList = buttons.map(button =>{
  return <Entry key={button.id} entry={button} element = {btnElementArray[button.id - 1]} />
})
const blockList = blocks.map(block =>{
  return <Entry key={block.id} entry={block} element={blockElementArray[block.id-1]} />
})
const tabList = tabs.map(tab =>{
  return <Entry key={tab.id} entry={tab} element = {tabElementArray[tab.id-1]} />
})
const errsList = errs.map( err => {
  return <Entry key={err.id} entry={err} element={errElementArray[err.id-1]} />
})
const loadList = loading.map( load => {
  return <Entry key={load.id} entry={load} element={loadElementArray[load.id-1]} />
})
const navList = sections.map( section => (
  <button key={key++} className=" p-4 capitalize rounded-2xl w-fit transition-all duration-200 hover:bg-slate-200 hover:text-black" onClick={() => {setPage(section); setActive(section)}}>
    {section}
  </button>
))

if(page === 'home'){list = <Home />}
if(page === 'buttons'){list = btnList}
if(page === 'images'){list = blockList}
if(page === 'tabs'){list = tabList}
if(page === 'errors'){list = errsList}
if(page === 'loading'){list = loadList}

  return (
    <div>
      <Header />
      <div className=" grid grid-cols-3 grid-rows-2 sm:grid-cols-6 sm:grid-rows-1 p-2 mx-auto md:max-w-3xl justify-items-center">
        {navList}
      </div>
      <hr />
      {list}
      <Footer />
    </div>
  )
}

export default App
