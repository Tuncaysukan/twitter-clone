import React from 'react'

const UserBox = () => {
    return (
        <div className='flex justify-between items-center mb-5 hover:bg-primary-light rounded-full'>
            <img 
            className='rounded-full w-20 h-20 '
             src="https://media.kasperskydaily.com/wp-content/uploads/sites/91/2020/02/14155527/twitter-privacy-security-featured.jpg"
            alt="Profile İmg"/>
            <div className="name flex flex-col text-md font-bold text-black"><span>Tncy SKN</span></div>
            <div className="titleName text-sm text-gray"><span>@Tncysss</span></div>
        </div>
    )
}

export default UserBox
