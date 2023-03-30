import { buttons } from './components/entries/buttons.js'
import { tabs } from './components/entries/tabs.js'
import { blocks } from './components/entries/blocks.js'
import { useState, useEffect } from 'react'
import Header from './components/header'
import Purpose from './components/home'
import Entry from './components/entry'
import Footer from './components/footer'
import Trash from './components/element/buttons/trash.jsx'
import Add from './components/element/buttons/add.jsx'
import Claim from './components/element/buttons/claim.jsx'
import Submit from './components/element/buttons/submit.jsx'
import Highlight from './components/element/tabs/highlight.jsx'
import Bold from './components/element/tabs/bold.jsx'
import Underline from './components/element/tabs/underline.jsx'
import Info from './components/element/blocks/info.jsx'
import Blur from './components/element/blocks/blur.jsx'

function App() {
  const [page, setPage] = useState('home')
  let list
  const btnElementArray = [<Trash />, <Add />, <Claim />, <Submit />]
  const tabElementArray = [<Highlight />,<Bold />,<Underline />] 
  const blockElementArray = [<Info />,<Blur />]

const btnList = buttons.map(button =>{
  return <Entry key={button.id} entry={button} element = {btnElementArray[button.id - 1]} />
})
const blockList = blocks.map(block =>{
  return <Entry key={block.id} entry={block} element={blockElementArray[block.id-1]} />
})
const tabList = tabs.map(tab =>{
  return <Entry key={tab.id} entry={tab} element = {tabElementArray[tab.id-1]} />
})

if(page === 'home'){list = <Purpose />}
if(page === 'buttons'){list = btnList}
if(page === 'blocks'){list = blockList}
if(page === 'tabs'){list = tabList}

  return (
    <div>
      <Header />
      <div className=" grid grid-cols-4 p-2 mx-auto md:max-w-lg justify-items-center">
      <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500" onClick={() => setPage('home')}>Home</button>
      <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500" onClick={() => setPage('buttons')}>Buttons</button>
      <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500" onClick={() => setPage('blocks')}>Blocks</button>
      <button className=" p-4 rounded-2xl w-fit transition-all duration-200 hover:bg-slate-500" onClick={() => setPage('tabs')}>Tabs</button>
      </div>
      <hr />
      {list}
      <Footer />
    </div>
  )
}

export default App
