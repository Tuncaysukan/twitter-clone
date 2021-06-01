import React, { useEffect } from 'react';
import db from "../firebase";
import { PopulerIcon } from '../icons/Icon'

const Content = () => {
    return (
        <main className=' flex-1 flex flex-col border-r border-l'>

            <header className='flex  sticky top-0  z-10 justify-between items-center p-4 border-b border-gray-extraLight  bg-white'>
                <span className='font-bold text-xl text-gray-900 '>Home</span>
                <PopulerIcon className='w-6 h-6  text-primary-base' />
            </header>


        </main>
    )
}

export default Content
