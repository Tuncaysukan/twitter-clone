import React from 'react'

const Container = ({children}) => {
    return (
        <div className='min- max-w-7xl min-h-screen mx-auto	border flex'>
            { children}
        </div>
    )
}

export default Container
