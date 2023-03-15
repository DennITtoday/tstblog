import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Navigation from './Components/Navigation'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
      </Layout>
    </BrowserRouter>
  )
}

export default App
