import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div
      className='relative min-w-[280px] h-full overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_20px_45px_rgba(15,23,42,0.22)] transition-transform duration-300 hover:-translate-y-1'
      style={{ backgroundColor: props.color }}
    >
      <img
        src={props.img}
        alt='customer portrait'
        className='absolute inset-0 h-full w-full object-cover opacity-45'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent' />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard