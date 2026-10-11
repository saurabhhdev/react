import React from 'react'

const HeroText = () => {
    return (
        <div className='p-2 md:p-6'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500'>Audience intelligence</p>
            <h3 className='mb-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-900 md:text-6xl lg:text-7xl'>Prospective <span className='text-slate-500'>customer</span><br />segmentation</h3>
            <p className='max-w-md text-base leading-7 text-slate-600 md:text-lg'>Understand who your customers are, where they are in their journey, and which banking needs deserve the most relevant conversation.</p>
        </div>
    )
}

export default HeroText