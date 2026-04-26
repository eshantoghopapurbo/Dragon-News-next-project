import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImg from "@/assets/user.png"
import NabLink from './NabLink';

const Navbar = () => {
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
           <div className='flex justify-center gap-3'>
            <Image src={userImg} alt='user Img' width={50} height={50}></Image>
            <button className='btn bg-[#403F3F] text-white'>
                <Link href={"/login"}>Login</Link>
            </button>
           </div>
        </div>
    );
};

export default Navbar;    