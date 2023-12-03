import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Account from './components/Account';
import Books from './components/Books';
import Login from './components/Login';
import Navbar from './components/Navigations';
import Signup from './components/Register';
import SingleBook from './components/SingleBook';


function App() {
  const [token, setToken] = useState(null)

  return (
    <>
<BrowserRouter>
  <Navbar />
   <Routes>
      <Route path = "/"  element ={<Books />} />
      <Route path = "/books/:bookId" element ={<SingleBook />} />
      <Route path = "/register" element = {<Signup />} />
      <Route path = "/login" element = {<Login />} />
   </Routes>
</BrowserRouter>
    </>
  );
}

export default App
