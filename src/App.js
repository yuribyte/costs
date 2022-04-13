import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import NotFound from './components/pages/NotFound'
import Projects from './components/pages/Projects'

// Layout
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
