import React from 'react'

function Loading() {
    return (
        <div className='flex transition-all duration-500 bg-amber-200/30 backdrop-blur-sm items-center flex-col justify-center top-0 right-0 z-50 w-screen h-screen fixed'>
            <div className="spinner"></div>
        </div>
    )
}

export default Loading