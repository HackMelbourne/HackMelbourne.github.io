import React from 'react'

const RiserGame = () => {
    return (
        <div className='mx-auto flex flex-col gap-8 items-center mt-32'>
            <div className=''>Get to 9000</div>
            <div className='font-bold text-8xl'>0000</div>
            <div className='bg-yellow-500/10 border border-yellow-500 rounded-full w-48 h-48 flex content-center justify-center flex-wrap'>
                <div className=' font-bold text-4xl'>START</div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <div className='flex flex-row gap-4'>
                    <div className='border-4 border-yellow-500 rounded-full h-6 w-6 bg-transparent'></div>
                    <div className='border-4 border-yellow-500 rounded-full h-6 w-6 bg-transparent'></div>
                </div>
                <p>Attempts</p>
            </div>
        </div>
    )
}

export default RiserGame