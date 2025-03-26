import React from 'react'

const Bag = () => {
  return (
    <>
    <div className='flex justify-center ml-2 sm:ml-0 mt-10 '>
      <div>
      <div className='flex gap-3 py-4 sm:text-xl font-semibold'>
      <a href="" className='cursor-pointer text-gray-600 active:underline active:text-black pb-2 '>BAG  </a> ------
      <a href="" className='cursor-pointer text-gray-600 active:underline active:text-black pb-2 '> ADDRESS  </a> ------
      <a href="" className='cursor-pointer text-gray-600 active:underline active:text-black pb-2 '> PAYMENT</a>
      </div>
      <div className='sm:mt-24'>
        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"  alt="" className='w-56' />
        <h1 className='pt-5 text-xl pb-2 font-bold pl-16'>Hey, it feels so light!</h1>
        <p>There is nothing in your bag. Let's add some items</p>
        <a href="/wishlist">
        <button className='my-4 p-2 ml-8 border-2 border-pink-600  text-pink-600 hover:text-white hover:bg-pink-600 rounded-lg hover:ease-out hover:duration-700'>ADD ITEMS FROM WISHLIST</button></a>
      </div>
      </div>
    </div>
    </>
  )
}

export default Bag