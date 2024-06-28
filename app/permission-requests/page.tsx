import React from 'react'
import Request from '@/components/permissionpage/Request'
const data = [
    {
        title: "Apollo glenegals hospital"
    },
    {
        title: "Nightingle hospital"
    },
    {
        title: "Woodlands hospital"
    },
    {
        title: "Chennai central hospital"
    },
]

const page = () => {
    return (
        <div className='px-[10%] min-h-svh flex flex-col justify-center gap-16 pt-20'>
            <div className='relative flex w-fit gap-2'>
                <h1 className='text-lg md:text-2xl font-bold'>List of organisations asking for permission</h1>
                <div className='w-fit relative right-0 top-0 p-3 sm:p-4 rounded-full border flex items-center justify-center group h-fit'>
                    <h1 className='absolute text-sm'>?</h1>
                    <div className='w-60  px-5 py-4 border bg-white/60 backdrop-blur-md border-slate-200 rounded-2xl absolute top-10 -left-[13.5rem] sm:left-10 scale-0 group-hover:scale-100 duration-300 origin-top-left'>
                        <h1 className='text-slate-500'>! These are the list of medical organisation bodies which are having the permission to access your medical records !</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col divide-y-[1px] divide-slate-200'>
                {
                    data.map((item, idx) => (
                        <Request key={idx} title={item.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default page