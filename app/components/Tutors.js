import React from 'react'
import woman from "../../public/photo_2022-05-11_00-14-57 4.png"
import man from "../../public/photo_2022-05-11_00-14-57 4 (1).png"
import bookmark from "../../public/bookmark-sharp.svg"
import Line from "../../public/Line 2.svg"
import Mask from "../../public/Mask group.svg"
import Image from 'next/image'
import Link from 'next/link'
export default function Tutors() {
  return (
    <div className='w-full bg-white'>
    <div className='mx-auto pt-[46px] md:pb-[104px] pb-20 max-w-[1440px] flex flex-col'>
    <h1 className='text-5xl font-semibold text-center text-primary'>Top Tutors</h1>
    <div className="flex flex-wrap justify-center gap-[10px]">
    <Cards image={woman} icon={bookmark} name="Lisa Lee" job="UX/UI Research (10 years+ experience)" workplace="Ofspace.agency"/>
    <Cards image={man} icon={bookmark} name="Tom Maxwell" job="UX/UI Research (10 years+ experience)" workplace="Ofspace.agency"/>
    <Cards image={woman} icon={bookmark} name="Lisa Lee" job="UX/UI Research (10 years+ experience)" workplace="Ofspace.agency"/>
    <Cards image={man} icon={bookmark} name="Tom Maxwell" job="UX/UI Research (10 years+ experience)" workplace="Ofspace.agency"/>
    <Cards image={woman} icon={bookmark} name="Lisa Lee" job="UX/UI Research (10 years+ experience)" workplace="Ofspace.agency"/>
    </div>
    <div className='flex items-center justify-center gap-x-6 mt-12'>
     <div className='flex items-center relative z-10 bg-[#108A00] h-10 w-10 rounded-full'>
      <Image src={Mask} alt="minus" />
        <Image src={Line} alt="Ling/-icon" className=' left-[34px] absolute' />
     </div>
     <Link href="/" className='text-primary text-xl relative left-8 font-medium underline'>View All</Link>
    </div>
        </div>
    
    </div>
  )
}

function Cards({image, icon, name, job, workplace}){
  return(
    <div className="relative bg-white p-3 m-2 rounded-[20px] shadow-lg">
      {/* Background Image */}
      <div className="relative">
        <Image
          className="object-cover"
          src={image}
          alt="Image"
        />
        <div className="absolute top-0 right-0 p-1 m-2 bg-orange rounded-full">
          <Image className="w-4 h-4 fill-current text-white" src={icon} alt="icon" />
        </div>
        <div className="absolute bg-black/30 rounded-b-[15px] text-white bottom-0 left-0 p-4 font-medium">
          <h3 className="text-[15px]">{name}</h3>
          <p className='text-[11px]'>{job}</p>
          <p className='text-[11px]'>{workplace}</p>
        </div>
      </div>
    </div>
 
  )
}