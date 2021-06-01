import React from 'react'
import {SearchIcon} from '../icons/Icon'
import { Timeline } from 'react-twitter-widgets'

const Widget = () => {
    return (
        <aside className=' sticky h-screen w-80'> 
        <div>
<div className="flex items-center  space-x-4  p-3 m-3
 bg-gray-200 rounded-full text-gray-dark
 focus-within:bg-white focus-within:ring-1 
 focus-within:ring-primary-base focus-within:text-primary-base">
<SearchIcon  className='w-5 h-5' />
<input type="text" placeholder='Search Twitter' 
className=' placeholder-gray-black w-full text-sm
bg-transparent outline-none focus:outline-none'/>
</div>
        </div>
        <div className='mt-5'>
        <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    height: '870'
  }}
/>
            
        </div>
        </aside>
    )
}

export default Widget
