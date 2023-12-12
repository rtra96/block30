import { React , useState } from 'react'
import bookLogo from './assets/books.png'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import  Account from './components/Account';
import AllBooks from './components/Books';
import Login from './components/Login';
import Navbar from './components/Navigations';
import Signup from './components/Register';
import SingleBook from './components/SingleBook';
import Register from './components/Register';




function App() {
  const [token, setToken] = useState(null)

  return (
    <>
<BrowserRouter>
  <Navbar />
   <Routes>
      <Route path = "/"  element ={<AllBooks />} />
      <Route path = "/books/:bookId" element ={<SingleBook />} />
      <Route path = "/register" element = {<Register setToken = {setToken} />} />
      <Route path = "/login" element = {<Login setToken = {setToken}/>} />
      <Route path = "/account" element = {<Account token = {token}/>} />
      
   </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
