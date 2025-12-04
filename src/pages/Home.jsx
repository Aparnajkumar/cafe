import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

function Home() {
    const items = useSelector((state) => state.counterReducer.items)

    console.log(items);

    const dispatch = useDispatch()

    const [cart, setCart] = useState({})
    const [data, setData] = useState([])
    const [one, setone] = useState(true)
    const [two, settwo] = useState(false)
    const [three, setthree] = useState(false)
    const [four, setfour] = useState(false)
    const [five, setfive] = useState(false)
    const [six, setsix] = useState(false)

    const getdata = async () => {
        try {
            const result = await fetch("https://zartek-task.vercel.app/api/resto-cafe")
            const data = await result.json();
            setData(data);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getdata()
    }, [])



    return (
        <>
            <Header items={items} />
            <div  className="  flex  items-center overflow-x-auto no-scrollbar space-x-20 md:space-x-40 px-20 ">
                <div className={one ? "border-b-2  border-pink-600 w-fit " : ""}>
                    <button onClick={() => { setone(true); settwo(false); setthree(false); setfour(false); setfive(false); setsix(false) }} className={one ? "text-pink-600 font-semibold whitespace-nowrap" : "text-black whitespace-nowrap"}>Salads and Soups</button>
                </div>
                <div className={two ? " w-full border-b-2 border-pink-600" : ""}>
                    <button onClick={() => { setone(false); settwo(true); setthree(false); setfour(false); setfive(false); setsix(false) }} className={two ? "whitespace-nowrap text-pink-600 font-semibold" : "text-black whitespace-nowrap"}>From The Barnyard</button>
                </div>
                <div className={three ? " w-full border-b-2 border-pink-600" : ""}>
                    <button onClick={() => { setone(false); settwo(false); setthree(true); setfour(false); setfive(false); setsix(false) }} className={three ? "whitespace-nowrap text-pink-600 font-semibold" : "text-black whitespace-nowrap"}>From The Hen House</button>
                </div>
                <div className={four ? " w-full border-b-2 border-pink-600" : ""}>
                    <button onClick={() => { setone(false); settwo(false); setthree(false); setfour(true); setfive(false); setsix(false) }} className={four ? "whitespace-nowrap text-pink-600 font-semibold" : "text-black whitespace-nowrap"}>Fresh From The Sea</button>
                </div>
                <div className={five ? " w-full border-b-2 border-pink-600" : ""}>
                    <button onClick={() => { setone(false); settwo(false); setthree(false); setfour(false); setfive(true); setsix(false) }} className={five ? "whitespace-nowrap text-pink-600 font-semibold" : "text-black whitespace-nowrap"}>Biriyani</button>
                </div>
                <div className={six ? " w-full border-b-2 border-pink-600" : ""}>
                    <button onClick={() => { setone(false); settwo(false); setthree(false); setfour(false); setfive(false); setsix(true) }} className={six ? "whitespace-nowrap text-pink-600 font-semibold" : "text-black whitespace-nowrap"}>Fast Food</button>
                </div>

            </div>



            {one && <div className="">
                {data?.data?.map((item) => (
                    item.table_menu_list?.[0]?.category_dishes?.map((dish) => (


                        <div className='  grid grid-cols-[1.2fr_6fr_2fr_2fr] md:grid-cols-[.2fr_6fr_2fr_2fr] md:gap-5 p-1  border border-gray-300'>
                            <div className='ms-1 me-1 md-me-0 shrink-0'>

                                {dish.dish_Type == 2 ?
                                    <img className=' md:w-8 w-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png" alt="" />
                                    :
                                    <img className=' w-6 md:w-6' src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png" alt="" />
                                }
                            </div>
                            <div className="">
                                <h1 className='font-semibold'>{dish.dish_name}</h1>
                                <p className='font-semibold'>{dish.dish_currency}{dish.dish_price}</p>
                                <p className='sm:text-sm text-sm'> {dish.dish_description}</p>
                                {dish.dish_Availability == true &&
                                    <span className='bg-green-600 text-center text-white rounded-2xl'>
                                        <button onClick={() => dispatch(decrement(dish.dish_id))} className='p-2 text-xl'>-</button>
                                        {items[dish.dish_id] || 0}
                                        <button onClick={() => dispatch(increment(dish.dish_id))} className='p-2 text-xl'>+</button>
                                    </span>}
                                {dish.dish_Availability == true ? <p className='text-red-500'>Customization Available</p> :
                                    <p className='text-red-500'>Not Available</p>}
                            </div>

                            <div className="">
                                <p className='sm:text-sm text-sm font-semibold'>{dish.dish_calories} Calories</p>
                            </div>
                            <div className="flex justify-center">
                                <img className='img-fluid' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}

            {two && <div className="">
                {data?.data?.map((item) => (
                    item.table_menu_list?.[1]?.category_dishes?.map((dish) => (


                        <div className='  grid grid-cols-[1.2fr_6fr_2fr_2fr] md:grid-cols-[.2fr_6fr_2fr_2fr] md:gap-5 p-1  border border-gray-300'>
                            <div className='ms-1 me-1 md-me-0 shrink-0'>

                                {dish.dish_Type == 2 ?
                                    <img className=' md:w-8 w-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png" alt="" />
                                    :
                                    <img className=' w-6 md:w-6' src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png" alt="" />
                                }
                            </div>
                            <div className="">
                                <h1 className='font-semibold'>{dish.dish_name}</h1>
                                <p className='font-semibold'>{dish.dish_currency}{dish.dish_price}</p>
                                <p className='sm:text-sm text-sm'>{dish.dish_description}</p>
                                {dish.dish_Availability == true &&
                                    <span className='bg-green-600 text-center text-white rounded-2xl'>
                                        <button onClick={() => dispatch(decrement(dish.dish_id))} className='p-2 text-xl'>-</button>
                                        {items[dish.dish_id] || 0}
                                        <button onClick={() => dispatch(increment(dish.dish_id))} className='p-2 text-xl'>+</button>
                                    </span>}
                                {dish.dish_Availability == true ? <p className='text-red-500'>Customization Available</p> :
                                    <p className='text-red-500'>Not Available</p>}
                            </div>

                            <div className="">
                                <p className='font-semibold'>{dish.dish_calories} Calories</p>
                            </div>
                            <div className="flex justify-center">
                                <img className='img-fluid' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}

            {three && <div className="">
                {data?.data?.map((item) => (
                    item.table_menu_list?.[2]?.category_dishes?.map((dish) => (


                        <div className='  grid grid-cols-[1.2fr_6fr_2fr_2fr] md:grid-cols-[.2fr_6fr_2fr_2fr] md:gap-5 p-1  border border-gray-300'>
                            <div className='ms-1 me-1 md-me-0 shrink-0'>

                                {dish.dish_Type == 2 ?
                                    <img className=' md:w-8 w-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png" alt="" />
                                    :
                                    <img className=' w-6 md:w-6' src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png" alt="" />
                                }
                            </div>
                            <div className="">
                                <h1 className='font-semibold'>{dish.dish_name}</h1>
                                <p className='font-semibold'>{dish.dish_currency}{dish.dish_price}</p>
                                <p className='sm:text-sm text-sm'>{dish.dish_description}</p>
                                {dish.dish_Availability == true &&
                                    <span className='bg-green-600 text-center text-white rounded-2xl'>
                                        <button onClick={() => dispatch(decrement(dish.dish_id))} className='p-2 text-xl'>-</button>
                                        {items[dish.dish_id] || 0}
                                        <button onClick={() => dispatch(increment(dish.dish_id))} className='p-2 text-xl'>+</button>
                                    </span>}
                                {dish.dish_Availability == true ? <p className='text-red-500'>Customization Available</p> :
                                    <p className='text-red-500'>Not Available</p>}
                            </div>

                            <div className="">
                                <p className='font-semibold'>{dish.dish_calories} Calories</p>
                            </div>
                            <div className="flex justify-center">
                                <img className='img-fluid' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}

            {four && <div className="">
                {data?.data?.map((item) => (
                    item.table_menu_list?.[3]?.category_dishes?.map((dish) => (


                        <div className='  grid grid-cols-[1.2fr_6fr_2fr_2fr] md:grid-cols-[.2fr_6fr_2fr_2fr] md:gap-5 p-1  border border-gray-300'>
                            <div className='ms-1 me-1 md-me-0 shrink-0'>

                                {dish.dish_Type == 2 ?
                                    <img className=' md:w-8 w-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png" alt="" />
                                    :
                                    <img className=' w-6 md:w-6' src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png" alt="" />
                                }

                            </div>
                            <div className="">
                                <h1 className='font-semibold'>{dish.dish_name}</h1>
                                <p className='font-semibold'>{dish.dish_currency}{dish.dish_price}</p>
                                <p className='sm:text-sm text-sm'>{dish.dish_description}</p>
                                {dish.dish_Availability == true &&
                                    <span className='bg-green-600 text-center text-white rounded-2xl'>
                                        <button onClick={() => dispatch(decrement(dish.dish_id))} className='p-2 text-xl'>-</button>
                                        {items[dish.dish_id] || 0}
                                        <button onClick={() => dispatch(increment(dish.dish_id))} className='p-2 text-xl'>+</button>
                                    </span>}
                                {dish.dish_Availability == true ? <p className='text-red-500'>Customization Available</p> :
                                    <p className='text-red-500'>Not Available</p>}
                            </div>

                            <div className="">
                                <p className='font-semibold'>{dish.dish_calories} Calories</p>
                            </div>
                            <div className="flex justify-center">
                                <img className='img-fluid' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}

            {five && <div className="">
                {data?.data?.map((item) => (
                    item.table_menu_list?.[4]?.category_dishes?.map((dish) => (


                        <div className='  grid grid-cols-[1.2fr_6fr_2fr_2fr] md:grid-cols-[.2fr_6fr_2fr_2fr] md:gap-5 p-1  border border-gray-300'>
                            <div className='ms-1 me-1 md-me-0 shrink-0'>

                                {dish.dish_Type == 2 ?
                                    <img className=' md:w-8 w-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png" alt="" />
                                    :
                                    <img className=' w-6 md:w-6' src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png" alt="" />
                                }
                            </div>
                            <div className="">
                                <h1 className='font-semibold'>{dish.dish_name}</h1>
                                <p className='font-semibold'>{dish.dish_currency}{dish.dish_price}</p>
                                <p className='sm:text-sm text-sm'>{dish.dish_description}</p>
                                {dish.dish_Availability == true &&
                                    <span className='bg-green-600 text-center text-white rounded-2xl'>
                                        <button onClick={() => dispatch(decrement(dish.dish_id))} className='p-2 text-xl'>-</button>
                                        {items[dish.dish_id] || 0}
                                        <button onClick={() => dispatch(increment(dish.dish_id))} className='p-2 text-xl'>+</button>
                                    </span>}
                                {dish.dish_Availability == true ? <p className='text-red-500'>Customization Available</p> :
                                    <p className='text-red-500'>Not Available</p>}
                            </div>
                            <div className="">
                                <p className='font-semibold'>{dish.dish_calories} Calories</p>
                            </div>
                            <div className="flex justify-center">
                                <img className='img-fluid' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}


            {six && <div className="">
                {data?.data?.map((item) => (
                    item.table_menu_list?.[5]?.category_dishes?.map((dish) => (


                        <div className='  grid grid-cols-[1.2fr_6fr_2fr_2fr] md:grid-cols-[.2fr_6fr_2fr_2fr] md:gap-5 p-1  border border-gray-300'>
                            <div className='ms-1 me-1 md-me-0 shrink-0'>

                                {dish.dish_Type == 2 ?
                                    <img className=' md:w-8 w-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png" alt="" />
                                    :
                                    <img className=' w-6 md:w-6' src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png" alt="" />
                                }
                            </div>
                            <div className="">
                                <h1 className='font-semibold'>{dish.dish_name}</h1>
                                <p className='font-semibold'>{dish.dish_currency}{dish.dish_price}</p>
                                <p className='sm:text-sm text-sm'>{dish.dish_description}</p>
                                {dish.dish_Availability == true &&
                                    <span className='bg-green-600 text-center text-white rounded-2xl'>
                                        <button onClick={() => dispatch(decrement(dish.dish_id))} className='p-2 text-xl'>-</button>
                                        {items[dish.dish_id] || 0}
                                        <button onClick={() => dispatch(increment(dish.dish_id))} className='p-2 text-xl'>+</button>
                                    </span>}
                                {dish.dish_Availability == true ? <p className='text-red-500'>Customization Available</p> :
                                    <p className='text-red-500'>Not Available</p>}
                            </div>

                            <div className="">
                                <p className='font-semibold'>{dish.dish_calories} Calories</p>
                            </div>
                            <div className="flex justify-center">
                                <img className='img-fluid' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}
        </>
    )
}

export default Home