import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute inset-0 flex flex-col justify-between p-6 md:p-8'>
            <div className='flex items-center justify-between'>
                <span className='flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-slate-900 shadow-lg'>
                    {props.id + 1}
                </span>
                <span className='rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm'>
                    insight
                </span>
            </div>

            <div>
                <p className='mb-6 max-w-xs text-base leading-7 text-white/90 md:text-lg'>
                    Better understand customer needs, habits, and opportunities for a more relevant digital experience.
                </p>
                <div className='flex items-center justify-between gap-4'>
                    <button
                        style={{ backgroundColor: props.color }}
                        className='rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md ring-1 ring-white/20 md:px-6'
                    >
                        {props.tag}
                    </button>
                    <button className='flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-white backdrop-blur-sm transition hover:bg-white/20'>
                        <i className='ri-arrow-right-line' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent