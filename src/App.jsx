import { buttons } from './components/entries/buttons.js'
import Header from './components/header'
import Purpose from './components/home'
import Entry from './components/entry'
import Footer from './components/footer'
import Trash from './components/element/trash.jsx'
import Add from './components/element/add.jsx'
import Claim from './components/element/claim.jsx'
import Submit from './components/element/submit.jsx'

function App() {

  return (
    <div>
      <Header />
      <Entry entry={buttons[0]} element = {<Trash />} />
      <Entry entry={buttons[1]} element = {<Add />} />
      <Entry entry={buttons[2]} element = {<Claim />} />
      <Entry entry={buttons[3]} element = {<Submit />} />
      <Footer />
    </div>
  )
}

export default App
