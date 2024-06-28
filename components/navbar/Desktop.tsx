"use client"
import React, { useEffect, useState } from 'react'
import Logo from '@/public/lottie/logo.svg'
import { Button } from '../ui/button'
import Link from 'next/link'



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
        <div className='flex justify-between px-10 py-4 items-center border-b fixed top-0 w-full bg-white/20 backdrop-blur-lg z-50'>
            <Logo className="w-48" />
            {
                !isLoggedIn &&
                <div className='flex gap-4'>
                    <Link href="/login">
                        <Button variant="outline" className=''>Login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="default">Register</Button>
                    </Link>
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