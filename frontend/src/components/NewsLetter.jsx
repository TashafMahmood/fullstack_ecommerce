import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-purple-200 flex items-center justify-center'>
        <div className='px-4 py-10 flex flex-col items-center justify-center'>
            <h1 className='text-[48px]'>Get Exclusive Offers On Your Email</h1>
            <p className='text-2xl mt-6'>Subscribe to our newsletter and stay updated.</p>
            <div className='bg-white w-fit rounded-full border-2 mt-6'>
                <input type="text" className='px-3 py-2 outline-none bg-transparent' placeholder='Your email'/>
                <button className='bg-black text-white px-3 py-2 rounded-full'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter