"use client"
import React, { useEffect, useState } from 'react'
import Logo from '@/public/lottie/logo.svg'
import { Button } from '../ui/button'

const usernav = [
    {
        title: "",
        href: ""
    }
]


const Desktop = () => {
    const [usertype, setUserType] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setUserType(localStorage.getItem("usertype"))
    }, [])
    return (
        <div className='flex justify-between px-10 py-4 items-center border-b'>
            <Logo className="w-48" />
            {
                !isLoggedIn&&
                <div className='flex gap-4'>
                    <Button variant="outline">Login</Button>
                    <Button variant="default">Register</Button>
                </div>
            }
            {
                isLoggedIn && usertype === "citizen" &&
                <div className='flex gap-2'>
                    <h1>Heyy</h1>
                    <h1>Heyy</h1>
                    <h1>Heyy</h1>
                    <h1>Heyy</h1>
                    <h1>Heyy</h1>
                </div>
            }

            

        </div>
    )
}

export default Desktop