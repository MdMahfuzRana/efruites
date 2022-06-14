import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { previewprcts } from '../../../PreviewSlice'
import { remove } from './HeartSlice'

function ItemsTable() {
    const tableDatas = useSelector(state => {return (state.heart.items)}) 
    const dispatch = useDispatch()
  return (
    <div classNameName='flex p-3 mt-10 '>
        {tableDatas.length>0?
        <>
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
                    tableDatas.map((item,index)=>(
                        <tr className='h-20  ' >
                        <td className="border text-lg font-medium border-gray-300 border-solid text-center border-collapse">
                            <h6>{index+1}</h6>
                        </td>
                        <td className="table-image h-20 p-2 border border-gray-300 border-solid border-collapse">
                            <img className='h-full w-full object-contain ' src={item.image} alt="product" />
                        </td>
                        <td className="table-name text-lg p-1 font-bold border border-gray-300 border-solid border-collapse ">
                            <h6>{item.title}</h6>
                        </td>
                        <td className="table-price p-1 border border-gray-300 border-solid border-collapse">
                            <h6>
                                {item.price}<small>/kilo</small>
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
                        <td className="table-shop border p-2 border-gray-300 border-solid border-collapse">
                            <button className="product-add h-10 w-40 text-white font-medium rounded-md hover:bg-gray-300 duration-300 ease-in cursor-pointer bg-green-600  " title="Add to Cart">add to cart</button>
                            <div className="product-action hidden">
                                <button className="action-minus" title="Quantity Minus">
                                    <AiOutlinePlus className="icofont-minus" />
                                </button>
                                <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                <button className="action-plus" title="Quantity Plus">
                                    <i className="icofont-plus"></i>
                                </button>
                            </div>
                        </td>
                        <td className="table-shop border pl-4 pr-0 border-gray-300 border-solid border-collapse">
                        <div  onClick={()=>{dispatch(previewprcts(item))}} className="view h-8 w-8 flex items-center justify-center bg-white rounded-md hover:bg-green-600 hover:text-white duration-300 ease-in cursor-pointer mb-4  ">
                                <BsFillEyeFill className="fas fa-eye" />
                            </div>
                            <div onClick={()=>{dispatch(remove(item))}} className="trash  h-8 w-8 flex items-center justify-center bg-white rounded-md hover:bg-green-600 hover:text-white duration-300 ease-in cursor-pointer  ">
                                <MdDelete className="icofont-trash" />
                            </div>
                        </td>
                    </tr>
    
                    ))
    
                }
                </tbody>
            </table>
            <div className="row mb-10">
                <div className="col-lg-12">
                    <div className="text-center mt-5">
                        <button className="h-10 w-40 text-white font-medium rounded-md hover:bg-gray-300 duration-300 ease-in cursor-pointer bg-green-600  ">Load more items </button>
                    </div>
                </div>
            </div>
            </>:
            null
        }
    </div>
  )
}

export default ItemsTable