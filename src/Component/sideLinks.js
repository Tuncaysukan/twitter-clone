import React from 'react'

const sideLinks = ({ name, Icon, actine, onMenuItemClick }) => {
    const isActive= actine===name;

    return (
        
        <li className=' cursor-pointer group' onClick={onMenuItemClick(name)}>
             
            <a className='text-xl ' href={name.toLowerCase()}>
                <div className="inline-block">
                    <div
                        className={`flex items-center group-hover:bg-primary-light 
                        group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
                            ${isActive ? "text-primary-base" : ""}`}>
                               
                        <Icon />
                        <span className='ml-3 font-bold'>
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default sideLinks
