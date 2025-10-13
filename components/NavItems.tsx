"use client";
import { NAVIGATION_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { use } from 'react'

const NavItems = () => {
    const pathName=usePathname();
    const isActive=(path:string)=>{
        if(path==='/'){ return pathName==='/';}

        return pathName.startsWith(path);
    }
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
        {NAVIGATION_LINKS.map(({href,label})=>(
            <li key={href}>
                <Link href={href} className={`hover:text-yellow-400 transition-colors ${isActive(href)?'text-gray-100':''}`}>
                    {label}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems