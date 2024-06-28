import React from 'react'
import Logo from'@/public/lottie/logo.svg'
import { Button } from '../ui/button'


const Footer = () => {
  return (
    <div className='py-20 bg-slate-200 px-[10%] items-center flex justify-between md:flex-row flex-col md:gap-0 gap-16'>
        <div className='flex flex-col gap-4 md:gap-32 items-center md:items-start'>
            <Logo className="w-48"/>
            <h1>Ⓒ MedSafe, 2024</h1>
        </div>
        <div className='flex flex-col gap-10 items-center md:items-end'>
            <h1 className='text-4xl font-semibold'>Get in touch</h1>
            <form className='flex gap-2 md:gap-4'>
                <input type="email" placeholder='Enter your email' className='px-4 rounded-lg w-[14rem]'/>
                <Button variant={"default"}>Submit</Button>
            </form>
            <div className='flex gap-6 md:flex-row flex-col items-center md:items-start'>
                <a href="" className='underline'>Privacy policy</a>
                <a href="" className='underline'>Terms & conditions</a>
                <a href="" className='underline'>help desk</a>
            </div>
        </div>
    </div>
  )
}

export default Footer