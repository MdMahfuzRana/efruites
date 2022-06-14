import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import { Routes, Route, Link } from "react-router-dom";
import Ragister from './Components/Ragister/Ragister';
import Preview from './Components/Prevew/Preview';
import { useEffect, useState, memo, useMemo} from 'react';
import ContactPage from './Components/Pages/ContactPage/ContactPage';
import Axios from './Components/Axios/Axios';
import { socket } from './socket/Socket';
import WishList from './Components/Pages/wishList/WishList';
import Chackout from './Components/Chackout/Chackout';
import ProductsPagesAll from './Components/Allproducts/ProductsPagesAll';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const [user, setuser] = useState(null)
  const localUser = localStorage.getItem('user')
  const preview = useSelector(state => state.preview.value)


  const userHandleMemo = useMemo(() => {
    if (localUser) { 
    console.log('hallow',localUser)
      Axios.post('/authUser',{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
      .then(res => {
        if(res.status === 200) {
          if(localStorage.getItem('user')) {
            setuser(res.data)
          }
        }
      })
      .catch(err => {
        window.location.href = '/login'
        localStorage.removeItem('user')
        localStorage.removeItem('token')
      })
    }
  }, [localUser])

  useEffect(() => {
    socket.on('connect',(io)=>{
      socket.emit('ow','halllow')
    });
    socket.emit('user',localUser) // send user to server
    
  }, [userHandleMemo])


  

  return (
    <div className="App bg-gray-100">
      {
        preview? <Preview products={preview} /> : null
      }
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path={user? '/profile':'/login'} element={user? <div>Profile</div>:<Login/>} />
{user?      
      null:<Route path="/ragister" element={<Ragister/>} />
        }
        <Route path="contactus" element={<ContactPage/>} />
        <Route path="wishlists" element={<WishList/>} />
        <Route path='chackout' element={<Chackout />} />
        <Route path='productAll' element={<ProductsPagesAll/>} />
        <Route path="*" element={<div className='h-screen w-screen flex items-center justify-center bg-red-600 text-4xl font-bold text-white' ><p className=' animate-bounce'>Not found</p></div>} />
      </Routes>
    </div>
  );
}

export default memo(App);
