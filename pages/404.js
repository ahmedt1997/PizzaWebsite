import React from 'react';
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import Link from 'next/link'

const NotFound = () => {
    const router = useRouter()
    
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },2000)
    },[])

    return (
        <div>
        <h2>Ooooop ....</h2>
        <p>This page was is not exsist</p>
        <Link href="/"><a>Go to Home page</a></Link>
    </div>
    );
}

export default NotFound;
