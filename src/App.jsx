import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
const  App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
