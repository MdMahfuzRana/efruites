import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import jwt from 'jwt-decode'

function App() {

  const [user, setuser] = useState(null)
  const localUser = localStorage.getItem('user')
  const token = localStorage.getItem('token')
  const preview = useSelector(state => state.preview.value)
  const navigate = useNavigate();

  useEffect(() => {
    if (localUser) { 
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
      })
    }
    socket.on('connect',(io)=>{
      socket.emit('ow','halllow')
    });
    // if(token){
    //   const out = jwt(token).exp;
    //   if (Date.now() >= out*1000) {
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('user')
    //     navigate('/login')
    //   }
    // }else{
    //   navigate('/login')
    // }
  }, [localUser])

  
  return (
    <div className="App bg-gray-100">
      {
        preview? <Preview product={preview} /> : null
      }
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={user? '/profile':'/login'} element={user? <div>Profile</div>:<Login/>} />
{user?      
      null:<Route path="/ragister" element={<Ragister/>} />
        }
        <Route path="contactus" element={<ContactPage/>} />
        <Route path="wishlists" element={<WishList/>} />
        <Route path='chackout' element={<Chackout />} />
        <Route path='productAll' element={<ProductsPagesAll/>} />
        <Route path='productDetails/:params' element={<ProductDetails/>} />
        <Route path="*" element={<div className='h-screen w-screen flex items-center justify-center bg-red-600 text-4xl font-bold text-white' ><p className=' animate-bounce'>Not found</p></div>} />
      </Routes>
    </div>
  );
}

export default memo(App);
