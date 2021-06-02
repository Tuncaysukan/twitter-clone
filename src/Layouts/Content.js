import React, { useEffect, useState } from "react";
import Divider from '../Component/Divider';
import TweetBox from '../Component/TweetBox';
import FeedList from "../Component/FeedList";
import db from "../firebase";
import { PopulerIcon } from '../icons/Icon';

const Content = () => {
    const [tweets, settweets] = useState([]);

    useEffect(() => {
        db.collection('feed')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>settweets(snapshot.docs.map((doc)=>doc.data())));
        console.log(tweets)
    }, []);
    return (
        <main className=' flex-1 flex flex-col border-r border-l'>

            <header className='flex  sticky top-0  z-10 justify-between items-center p-4 border-b border-gray-extraLight  bg-white'>
                <span className='font-bold text-xl text-gray-900 '>Home</span>
                <PopulerIcon className='w-6 h-6  text-primary-base' />
            </header>
<div className="twitterContent flex px-3 py-3 space-x-4 items-center">
<img 
            className='rounded-full w-20 h-20 '
             src="https://media.kasperskydaily.com/wp-content/uploads/sites/91/2020/02/14155527/twitter-privacy-security-featured.jpg"
            alt="Profile İmg"/>
    <TweetBox/>
</div>
<Divider/>
<FeedList tweets={tweets} />
        </main>
    )
}

export default Content
