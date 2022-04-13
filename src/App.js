import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <Router>
      <ul className='app-navbar'>
        <Link to='/'>Home</Link>
        <Link to='/company'>Company</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/newproject'>NewProject</Link>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/newproject' element={<NewProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
