import React, {useState} from 'react';
import { ImageIcon,GIFIcon ,EmojiIcon,PollIcon,ScheduleIcon} from "../icons/Icon";
import db from '../firebase';
import firebase from 'firebase';


const TweetBox = () => {
    const [content, setcontent] = useState('')
    const sendClick=()=>{

        if(content !== ''){
            db.collection('feed').add({
                displayName:'Tncy Skn',
                username:'tncysss',
                content,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                image:'http://www.yavrukangal.com/FileUpload/ks162834/File/yavru_kangal_satis_(319_x_420).jpg',
                avatar:'https://media.kasperskydaily.com/wp-content/uploads/sites/91/2020/02/14155527/twitter-privacy-security-featured.jpg',
            })
        }

    }
    return (
        <div className='flex-1 mt-2 px-2'>
            <textarea className=' w-full text-xl placeholder-gray-dark outline-none 
            overflow-hidden resize-none bg-transparent '
                placeholder='Whats happening' onChange={e =>setcontent(e.target.value)} 
                value={content}
                />
                
            <div className='flex items-center justify-between'>
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>
                </div>
                <button className='bg-primary-base
                 text-white rounded-full px-4 text-center py-2 font-medium' onClick={sendClick}>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
