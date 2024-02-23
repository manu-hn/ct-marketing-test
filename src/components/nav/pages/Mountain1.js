import React from 'react'

const Mountain1 = ({ active, selectMountain, children }) => {
  
  const isMountainSelected = active ? 'bg-gray-500 w-36 h-10 rounded mx-4 flex items-center justify-center underline' : "text-gray-400  mx-4 flex items-center justify-center h-10"
    return (
    <>
    <button className='flex items-center justify-center ' onClick={selectMountain}>
        <p className={` ${isMountainSelected} flex items-center text-xl hover:border hover:border-white`}>
            {children}
        </p>
    </button>

    </>
  )
}

export default Mountain1