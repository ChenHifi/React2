import React from 'react'
import {
    CloudArrowDownIcon,
    BookOpenIcon,
    ChatBubbleLeftEllipsisIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/solid'

import bgImg from "../assets/cyber-bg.png"

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-xl my-1'>Des Cours Uniques & Professionels</p>
          <h1 className='py-3 text-6xl md:text-7xl font-bold'>Formation C#</h1>
          <p className='text-xl'>C'est votre réussite.</p>
          <button className='py-1 px-6 sm:w-[50%] my-4'>S'inscrire</button>
        </div>
        <div>
          <img className='w-full' src={bgImg} alt="/"></img>
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 
        transform md:-translate-x-1/2 bg-zinc-200 border-slate-300 border rounded-xl text-center shadow-xl'>
          <p>Nos Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'><CloudArrowDownIcon className='h-6 text-indigo-700 mx-1'/> Téléchargements</p>
            <p className='flex px-4 py-2 text-slate-500'><BookOpenIcon className='h-6 text-indigo-700 mx-1'/> Apprentissage Rapide</p>
            <p className='flex px-4 py-2 text-slate-500'><ChatBubbleLeftEllipsisIcon className='h-6 text-indigo-700 mx-1'/> Discutez avec nos formateurs</p>
            <p className='flex px-4 py-2 text-slate-500'><CheckBadgeIcon className='h-6 text-indigo-700 mx-1'/> Certifié</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero