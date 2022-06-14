import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import { useSelector } from 'react-redux'
import './style.css'

function ChackIitems() {

    const busket = useSelector(state=>state.busket.items)

  return (
    <div className='flex flex-col p-3 mt-10 '>
        <table className="table-list mt-10 m-auto ">
            <thead className='' >
                <tr className='bg-green-600 text-white '>
                    <th className='p-3 ' scope="col">Serial</th>
                    <th className='p-3' scope="col">Product</th>
                    <th className='p-3' scope="col">Name</th>
                    <th className='p-3' scope="col">Price</th>
                    <th className='p-3' scope="col">description</th>
                    <th className='p-3' scope="col">status</th>
                    <th className='p-3' scope="col">shopping</th>
                    <th className='p-3' scope="col">action</th>
                </tr>
            </thead>
            <tbody>
            {
                busket?.map((product,index)=>(
                    <tr className='h-20  ' >
                    <td className="border text-lg font-medium border-gray-300 border-solid text-center border-collapse">
                        <h6>{index+1}</h6>
                    </td>
                    <td className="table-image h-20 p-2 border border-gray-300 border-solid border-collapse">
                        <img className='h-full w-full object-contain ' src={product?.image} alt="product" />
                    </td>
                    <td className="table-name text-lg p-1 font-bold border border-gray-300 border-solid border-collapse ">
                        <h6>{product?.title}</h6>
                    </td>
                    <td className="table-price p-1 border border-gray-300 border-solid border-collapse">
                        <h6>
                            {product?.price}<small>/kilo</small>
                        </h6>
                    </td>
                    <td className="table-desc w-60 text-left p-2 border border-gray-300 border-solid border-collapse">
                        <p className=' font-medium '>
                            Lorem ipsum nobis eaque excepturiafeaf nisi eveniet...<a className='text-green-600' href="product-video.html">read more</a>
                        </p>
                    </td>
                    <td className="table-status text-center font-medium text-lg p-2 border border-gray-300 border-solid border-collapse">
                        <h6 className="stock-out">stock out</h6>
                    </td>
                    <td className="table-shop border p-2 text-center font-medium border-gray-300 border-solid border-collapse">
                        <p>224</p>
                    </td>
                    <td className="table-shop border pl-4 pr-0 border-gray-300 border-solid border-collapse">
                    <div  className="view h-8 w-8 flex items-center justify-center bg-white rounded-md hover:bg-green-600 hover:text-white duration-300 ease-in cursor-pointer mb-4  ">
                            <BsFillEyeFill className="fas fa-eye" />
                        </div>
                        <div className="trash  h-8 w-8 flex items-center justify-center bg-white rounded-md hover:bg-green-600 hover:text-white duration-300 ease-in cursor-pointer  ">
                            <MdDelete className="icofont-trash" />
                        </div>
                    </td>
                </tr>
                ))
            }
            </tbody>
        </table>
        <div className="row mb-10">
            <div className="col-lg-12 hidden ">
                <div className="text-center mt-5">
                    <button className="h-10 w-40 text-white font-medium rounded-md hover:bg-gray-300 duration-300 ease-in cursor-pointer bg-green-600  ">Load more items </button>
                </div>
            </div>
        </div>

        <div className="chekout-coupon m-auto w-2/4 p-2">
        <p className="coupon-btn text-green-600  font-bold text-center ">Do you have a coupon code?</p>
        <div className="coupon-form m-auto sm:hidden flex items-center justify-center w-full ">
            <input className='h-10 p-2 outline-green-600' type="text" placeholder="Enter your coupon code" />
            <button className='h-10 w-40 ml-3 text-white font-medium rounded-md hover:bg-gray-300 duration-300 ease-in cursor-pointer bg-green-600  in-range:'>
                <span>apply</span>
            </button>
        </div>
        </div>
        <div className="checkout-charge m-auto w-2/4 p-3">
            <ul>
                <li className='flex w-full justify-between font-medium p-2'>
                    <span>Sub total</span>
                    <span>$267.45</span>
                </li>
                <li className='flex w-full justify-between font-medium p-2'>
                    <span>delivery fee</span>
                    <span>$10.00</span>
                </li>
                <li className='flex w-full justify-between font-medium p-2'>
                    <span>discount</span>
                    <span>$00.00</span>
                </li>
                <li className='flex w-full justify-between p-2 text-green-600 font-bold text-xl'>
                    <span>
                        Total<small>(Incl. VAT)</small>
                    </span>
                    <span>$277.00</span>
                </li>
            </ul>
        </div>


        <div className="account-card sm:w-5/6 m-auto mt-10 mb-10">
            <div className="account-title text-3xl font-bold mt-10 mb-5">
                <h4 >Delivery Schedule</h4>
            </div>
            <div className="account-contents ">
                <div className="row__info">
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="flex justify-between flex-col "> 
                            <h6 className=' text-lg text-bold'>express</h6>
                            <p>90 min express delivery</p>
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>8am-10pm</h6>
                            <p>8.00 AM - 10.00 PM</p>
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>Next day</h6>
                            <p>Next day or Tomorrow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="account-card sm:w-5/6 m-auto mt-10 mb-10">
            <div className="account-title text-3xl font-bold mt-10 mb-5">
                <h4 >Contact Number</h4>
            </div>
            <div className="">
                <div className="row__info">
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="flex justify-between flex-col "> 
                            <h6 className=' text-lg text-bold'>Primary</h6>
                            <textarea className='mt-1 w-full outline-green-600 text-gray-700 font-medium flex p-1' value='+8801838288389' type='text'  />
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>Secondary-optional</h6>
                            <textarea className='mt-1 w-full outline-green-600 text-gray-700 font-medium flex p-1' value='+8801838288389' type='text'  />
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>Secondary-optional</h6>
                            <textarea className='mt-1 w-full outline-green-600 text-gray-700 font-medium flex p-1' value='+8801838288389' type='text'  />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="account-card sm:w-5/6 m-auto mt-10 mb-10">
            <div className="account-title text-3xl font-bold mt-10 mb-5">
                <h4 >Delivery Address</h4>
            </div>
            <div className="">
                <div className="row__info">
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="flex justify-between flex-col "> 
                            <h6 className=' text-lg text-bold'>Home</h6>
                            <textarea className='text-sm mt-1 w-full outline-green-600 text-gray-700 font-medium flex p-1' value='Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A' type='text'  />
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>Office</h6>
                            <textarea className='mt-1 text-sm w-full outline-green-600 text-gray-700 font-medium flex p-1' value='Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A' type='text'  />
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>Bussiness</h6>
                            <textarea className='mt-1 text-sm w-full outline-green-600 text-gray-700 font-medium flex p-1' value='Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A' type='text'  />
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="account-card sm:w-5/6 m-auto mt-10 mb-10">
            <div className="account-title text-3xl font-bold mt-10 mb-5">
                <h4 >Payment Option</h4>
            </div>
            <div className="">
                <div className="row__info">
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="flex justify-between flex-col "> 
                            <h6 className=' text-lg text-bold'>Card Number</h6>
                            <textarea className='mt-1 w-full outline-green-600 text-gray-700 font-medium flex p-1' value='+8801838288389' type='text'  />
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>Card Number</h6>
                            <textarea className='mt-1 w-full outline-green-600 text-gray-700 font-medium flex p-1' value='+8801838288389' type='text'  />
                        </div>
                    </div>
                    <div className=" h-26 bg-green-500 text-white p-2 text-xl text-left rounded-md ">
                        <div className="profile-card schedule">
                            <h6 className=' text-lg text-bold'>Card Number</h6>
                            <textarea className='mt-1 w-full outline-green-600 text-gray-700 font-medium flex p-1' value='+8801838288389' type='text'  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-10">
            <div className="col-lg-12 ">
                <div className="text-center w-5/6 mt-5 m-auto">
                    <button className="h-16 w-full p-2 text-white font-medium rounded-md hover:bg-gray-300 duration-300 ease-in cursor-pointer bg-green-600  ">Proceed to Chackout</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChackIitems