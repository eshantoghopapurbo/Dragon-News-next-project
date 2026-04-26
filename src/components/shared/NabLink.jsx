"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NabLink = ({href,children}) => {
    const pathname =usePathname();
    console.log(pathname,"pathname");

  
    const cleanPath = (path) => path.replace(/\/$/, "");

    const isActive =
        href === "/"
            ? pathname === "/"
            : cleanPath(pathname).startsWith(cleanPath(href));
    return (
        <div>
            <Link href={href} 
            className={`${isActive ? "border-b-2 border-b-red-800" : ""}`}>
            {children}
            </Link>
        </div>
    );
};

export default NabLink; 