import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome.jsx'
import AllTheBooks from './components/AllTheBooks.jsx'
import MyFooter from './components/MyFooter.jsx'

function App() {

  return (
    <>
      <MyNav />
      <main className="container">
        <Welcome />
        <AllTheBooks />
      </main>
      <MyFooter />
    </>
  )
}

export default App