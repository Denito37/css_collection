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

  useEffect(() =>{
    //console.log(page)
  },[page])

  return (
    <div>
      <Header />
      <Entry entry={buttons[0]} element = {<Trash />} />
      <Entry entry={buttons[1]} element = {<Add />} />
      <Entry entry={buttons[2]} element = {<Claim />} />
      <Entry entry={buttons[3]} element = {<Submit />} />
      <Entry entry={blocks[0]} element={<Info />} />
      <Entry entry={blocks[1]} element={<Blur />} />
      <Footer />
    </div>
  )
}

export default App
