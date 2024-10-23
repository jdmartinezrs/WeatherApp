import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import IndexPage from './pages/Index';

function App() {


  return (
      <Router>
        <Routes>
         

<Route path='/' element={<IndexPage/>}/>

        </Routes>
      </Router>
  
  )
}

export default App
