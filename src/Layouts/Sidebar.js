import {useState} from 'react';
import { HomeIcon } from '../icons/Icon';
import { ExploreIcon } from '../icons/Icon';
import { NotificationsIcon } from '../icons/Icon';
import { MessagesIcon } from '../icons/Icon';
import { BookmarksIcon } from '../icons/Icon';
import { ListsIcon } from '../icons/Icon';
import { ProfileIcon } from '../icons/Icon';
import { MoreIcon } from '../icons/Icon';
import logo from "../img/twitter.svg";
import SideLink from '../Component/sideLinks';
import UserBox from '../Component/UserBox';
const sideLinks=[
    {
        name:'Home',
        icon:HomeIcon,
    },
    {
        name:'Explore',
        icon:ExploreIcon,
    },
    {
        name:'Notifications',
        icon:NotificationsIcon,
    },
    {
        name:'Messages',
        icon:MessagesIcon,
    },
    {
        name:'Bookmarks',
        icon:BookmarksIcon,
    },
    {
        name:'Lists',
        icon:ListsIcon,
    },
    {
        name:'Profile',
        icon:ProfileIcon,
    },
    {
        name:'More',
        icon:MoreIcon,
    },
]




const Sidebar = () => {
    const [active, setactive] = useState('Home');
   
    const handleMenuItemClick =(name)=>{
setactive(name);

    }
    return (
        <div className='h-screen  sticky top-0 z-10 flex flex-col justify-between w-72 p-4'>
            <div className="nav">
                <div className='mt-1 mb-4 ml-1 flex items-center justify-center 
                w-12 h-12 rounded-full hover:bg-gray-lightest
                transform transition-colors duration-200'>
                <img className='w-9 h-9' src={logo} alt="Logo" />
                </div>
                <nav className='mb-6'>
                <ul>
                    {sideLinks.map(({name,icon})=>(
                        <SideLink key={name} name={name} Icon={icon} 
                        active={active} onMenuItemClick={handleMenuItemClick}/>
                    ))}
                    
                </ul>
                </nav>
                <button className='bg-primary-base text-white rounded-full 
                    py-3 px-8 w-11/12 text-center shadow-lg hover:bg-primary-dark
                    transform transition-colors duration-200 ' >

                        Tweet

                   </button>
            </div>
            <UserBox/> 


        </div>
    )
}

export default Sidebar
