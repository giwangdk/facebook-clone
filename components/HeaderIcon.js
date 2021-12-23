import React from 'react'

function HeaderIcon({Icon}) {
    return (
        <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 ">
            <Icon className="h-5 hover:text-blue-500 text-center sm:h-7 mx-auto"/>
        </div>
    )
}

export default HeaderIcon
