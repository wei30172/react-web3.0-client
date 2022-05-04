import { useState } from 'react'
import { Navbar, Welcome, Services, Transactions, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h=screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
