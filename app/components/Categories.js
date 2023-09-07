import React from 'react'
import courseIcon from "../../../public/codesandbox.svg"
import Image from 'next/image'
const Categories = () => {
  return (
    <div className='w-full bg-[#F6F7FA]'>
              <div className='mx-auto pt-[46px] md:pb-[104px] pb-20 max-w-[1440px] flex flex-col'>
                <h1 className='text-5xl font-semibold text-center text-primary'>Categories</h1>
      <select
        id="location"
        name="location"
        className="my-[18px] block py-2 indent-3 md:w-[350px] w-[200px] mx-auto text-base border-[#CDCDCD] text-[#797878] outline-none border-2 rounded-lg "
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advance</option>
      </select>
      <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:px-[68px] md:gap-x-[56px] gap-y-4'>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      <Cards text="Technology"/>
      </div>          
       </div>
    </div>
  )
}

export default Categories

const Cards = ({text}) => {
    return(
        <div className='bg-white flex flex-col gap-3 mx-auto lg:w-[100%] md:p-6 p-4'>
            <div className='bg-[#108A00]/30 w-16 h-16 mx-auto flex justify-center items-center  rounded-full'>
                <Image src={courseIcon} alt="course-icon" />
            </div>
            <p className='text-xl font-semibold text-center'>{text}</p>
            </div>
    )
}