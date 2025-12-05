import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

function Home() {
    const items = useSelector((state) => state.counterReducer.items)



    const dispatch = useDispatch()

    
    const [data, setData] = useState([])


    const [tabdata, settabdata] = useState([])
    console.log(tabdata);

    const [activetab, setactivetab] = useState([])
    console.log(activetab);




    const getdata = async () => {
        try {
            const result = await fetch("https://zartek-task.vercel.app/api/resto-cafe")
            const data = await result.json();
            setData(data);
            settabdata(data.data[0].table_menu_list)
            setactivetab(data.data[0].table_menu_list[0].menu_category_id)
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    console.log(activetab)






    useEffect(() => {
        getdata()
    }, [])



    return (
        <>
            <Header items={items} />




            <div className="flex justify-evenly md:space-x-45 space-x-10 items-center overflow-x-auto whitespace-nowrap p-1">
                {tabdata.map((item, index) => (
                    <div className=''>
                        <button onClick={() => setactivetab(item.menu_category_id)}
                            key={index} className={activetab==item.menu_category_id? "border-b-2 border-pink-500 text-pink-600":"text-black"}>{item.menu_category}</button>

                    </div>))}
            </div>



            {activetab == 11 &&
                <div className="">
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
                                    <img className='rounded-xl' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                                </div>
                            </div>))
                    ))

                    }
                </div>
            }


            {activetab == 12 &&
                <div className="">
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
                                    <img className='rounded-xl' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                                </div>
                            </div>))
                    ))

                    }
                </div>}

            {activetab == 13 && <div className="">
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
                                <img className='rounded-xl' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}

            {activetab == 14 && <div className="">
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
                                <img className='rounded-xl' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}

            {activetab == 15 && <div className="">
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
                                <img className='rounded-xl' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}


            {activetab == 16 && <div className="">
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
                                <img className='rounded-xl' style={{ width: "100px", height: "100px" }} src={dish.dish_image} alt="img" />
                            </div>
                        </div>))
                ))

                }
            </div>}
        </>
    )
}

export default Home