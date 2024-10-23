import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import IndexPage from './pages/Indexbody';

function App() {


  return (
      <Router>
        <Routes>
         

<Route path='/home' element={<IndexPage/>}/>

        </Routes>
      </Router>
  
  )
}

export default App
