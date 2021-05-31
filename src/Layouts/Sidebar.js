import React from 'react';
import {HomeIcon} from '../icons/Icon';
import {ExploreIcon} from '../icons/Icon';
import {NotificationsIcon} from '../icons/Icon';
import {MessagesIcon} from '../icons/Icon';
import {BookmarksIcon} from '../icons/Icon';
import {ListsIcon} from '../icons/Icon';
import {ProfileIcon} from '../icons/Icon';
import {MoreIcon} from '../icons/Icon';





const Sidebar = () => {
    return (
        <div className='w-72 bg-blue-200'>
            <span>sidebar</span>
            <HomeIcon/>
            <ExploreIcon/>
            <NotificationsIcon/>
            <MessagesIcon/>
            <BookmarksIcon/>
            <ListsIcon/>
            <ProfileIcon/>
            <MoreIcon/>

        </div>
    )
}

export default Sidebar