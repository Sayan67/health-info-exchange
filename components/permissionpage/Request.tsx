import React from 'react'
import { Button } from '../ui/button'


const Request = ({ title }: { title: string }) => {
    return (
        <div className="pt-6 pb-4 sm:px-6 flex sm:flex-row flex-col justify-between gap-4">
            <h1><span className='font-bold'>{title}</span> wants to access your medical information.</h1>
            <h1 className='text-neutral-400'>Would you give permission?</h1>
            <div className='flex gap-4'>
                <Button variant={"outline"} className=''>Decline</Button>
                <Button variant={"default"}>Accept</Button>
            </div>
        </div>
    )
}

export default Request