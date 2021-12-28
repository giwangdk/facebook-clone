import React from 'react'
import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

import HeaderIcon from './HeaderIcon';

function Header() {
    return (
        <div className="sticky top-0 bg-white flex z-50 items-center p-2 shadow-md lg:px-5">
            {/**Left */}
            <div className='flex items-center '>
                <Image src="https://links.papareact.com/5me" alt="facebook" width={40} height={40} />
                <div className="flex items-center rounded-full ml-3 bg-gray-100 p-2">
                    <SearchIcon className='h-5 text-gray-600 flex-shrink'/>
                    <input  type="text" name="" id="" className="hidden md:inline flex ml-2 items-center bg-transparent outline-none" placeholder="search facebook " />
                </div>
            </div>
            {/**Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>
            {/**Right */}
            <div className="flex items-center sm:space-2 justify-end">
                {/**Profile Pic */}
                <p className='whitespace-nowrap font-semibold pr-3'>Giwang Dwi Kintan</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon'/>
            </div>
        </div>
    )
}

export default Header
