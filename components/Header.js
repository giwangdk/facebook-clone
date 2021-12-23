import React from 'react'
import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <div>
            {/**Left */}
            <div className='flex items-center '>
                <Image src="https://links.papareact.com/5me" alt="facebook" width={40} height={40} />
                <div className="flex items-center rounded-full ml-3 bg-gray-100 p-2">
                    <SearchIcon className='h-5 text-gray-600'/>
                    <input type="text" name="" id="" className="flex ml-2 items-center bg-transparent outline-none" placeholder="search facebook" />
                </div>
            </div>
            {/**Center */}
            <div className="flex justify-center flex-grow">
                <div>
                    <HeaderIcon icon={HomeIcon}/>
                </div>
            </div>
            {/**Right */}
        </div>
    )
}

export default Header
