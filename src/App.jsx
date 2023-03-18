import { buttons } from './components/entries/buttons.js'
import Header from './components/header'
import Purpose from './components/home'
import Entry from './components/entry'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <Header />
      <Entry element={buttons[0]} />
      <Entry element={buttons[1]} />
      <Entry element={buttons[2]} />
      <Entry element={buttons[3]} />
      <Footer />
    </div>
  )
}

export default App
