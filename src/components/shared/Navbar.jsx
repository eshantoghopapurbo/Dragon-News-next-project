"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import userImg from "@/assets/user.png"
import NabLink from './NabLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user, isPending, "user");

    
    return (
        <div className='flex justify-between gap-4 mt-6 container mx-auto'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-5'>
                <li>
                    <NabLink href={"/"}>Home</NabLink>
                </li>
                <li>
                    <NabLink href={"/about-us"}>About</NabLink>
                </li>
                <li>
                    <NabLink href={"/career"}>career</NabLink>
                </li>
            </ul>
            {isPending ? (<span className="loading loading-spinner loading-lg"></span>
            ) : user ? (<div className='flex justify-center gap-3'>
                <h2>Hello,{user?.name}</h2>
                <Image src={user?.image || userImg} alt='user Img' width={50} height={50}></Image>
      <button className='btn bg-[#403F3F] text-white' onClick={async () => await authClient.signOut()} >Logout</button>
           </div>) :
    (<button className='btn bg-[#403F3F] text-white'>
        <Link href={"/login"}>Login</Link>
    </button>)
}
        </div >
    );
};

export default Navbar;    