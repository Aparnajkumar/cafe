import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { selectCartCount } from '../redux/counterSlice';
import { useSelector } from 'react-redux';

function Header() {
const cartCount = useSelector(selectCartCount);

    
    return (
        <>
            <nav className='flex justify-between bg-gray-50'>

                <div className="">
                    <h2 className='text-2xl p-3'> UNI Resto Cafe</h2>
                </div>
                <div className="flex p-5">
                    <a href="" className=''>My Orders</a>
                    <a href="" className='ms-3 text-2xl'><FaShoppingCart /></a>
                   
                    <sup className='text-white bg-red-600 font-bold p-2 rounded-4xl right-1.5'> {cartCount}</sup>
                </div>

            </nav>


        </>
    )
}

export default Header