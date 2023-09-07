import React from 'react'
import minimize from "../../../public/minimize.svg"
import map from "../../../public/map-pin.svg"
import next from "../../../public/Group 2.svg"
import Image from 'next/image'

const Popular = () => {
  return (
    <div className='w-full bg-white'>
                  <div className='mx-auto pt-[46px] md:pb-[104px] pb-20 max-w-[1440px] flex flex-col'>
                  <h2 className='text-3xl text-center font-semibold pb-[18px]'>All Popular </h2>
                  <div className='flex flex-col gap-y-[70px]'>
      <div className='flex flex-col gap-[58px] mx-4'>
       
         {data.map(({abb, course, active, level, btn, index}) => {
            return <Courses abb={abb} course={course} active={active} level={level} btn={btn} key={index}/>
         })}
      </div>
      <div className='flex flex-col gap-[58px] mx-4'>
       
       {data2.map(({abb, course, active, level, btn, match, index}) => {
          return <Courses2 abb={abb} course={course} active={active} level={level} btn={btn} match={match} key={index}/>
       })}
    </div>
    </div>
    <button className='rounded-[10px] flex items-center py-3 px-6 text-white  text-[23px] mt-[26px] gap-[15px] justify-center mx-auto bg-primary'>        
            View All
            <Image src={next} alt="next icon" />
              </button>
</div>
      </div>
  )
}

export default Popular

const data  = [
    {
        abb: "J",
        course: "Laravel Tutor (5)",
        active: "Online",
        level:"Beginner",
        btn:"View All"
    },
    {
        abb: "J",
        course: "Mathematics Tutor (10)",
        active: "Online",
        level:"Beginner",
        btn:"View All"
    },
    {
        abb: "J",
        course: "Grade1 Algebra Tutor  (20+)",
        active: "Online",
        level:"Beginner",
        btn:"View All"
    },

]
const data2  = [
    {
        abb: "J",
        match: "Match Company Limited",
        course: "Laravel Tutor (5)",
        active: "Online",
        level:"Beginner",
        btn:"Schedule"
    },
    {
        abb: "J",
        course: "Mathematics Tutor (10)",
        active: "Online",
        level:"Beginner",
        btn:"Schedule",
        match: "Match Company Limited",
    },
]
const Courses = ({abb, course, active, level, btn}) => {
    return(
        <div className='bg-white shadow px-[35px] border border-[#EFEFF0] rounded-[10px] py-8'>
           <div className='flex md:flex-row flex-col md:items-center gap-y-2 justify-between'>
            <div className='flex items-center space-x-[32px]'>
              <div className='lg:text-[50px] md:text-[45px] sm:text-[38px] text-3xl flex justify-center items-center bg-primary rounded-full h-14 w-14 text-center text-white'>
                {abb}
              </div>
              <div className='flex flex-col gap-2'>
                 <p>{course}</p>
                 <div className='flex gap-2 items-center'>
                 <span className='flex items-center gap-1'><Image src={map} alt="map icon" />{active}</span>
                 <span className='flex items-center gap-1'><Image src={minimize} alt="map icon" />{level}</span>
                 </div>
              </div>
              </div>
              <button className='rounded-[10px] py-3 px-8 text-white  text-[23px] bg-primary'>
            {btn}
              </button>
           </div>
        </div>
    )
}

const Courses2 = ({abb, course, active, level, btn, match}) => {
    return(
        <div className='bg-white shadow px-[35px] border border-[#EFEFF0] rounded-[10px] py-8'>
           <div className='flex md:flex-row flex-col md:items-center gap-y-2 justify-between'>
            <div className='flex items-center space-x-[32px]'>
              <div className='lg:text-[50px] md:text-[45px] sm:text-[38px] text-3xl flex justify-center items-center bg-primary rounded-full h-12 w-12 text-center text-white'>
                {abb}
              </div>
              <div className='flex flex-col gap-2'>
              <p className='text-[#5F5858]'>{match}</p>
                 <p>{course}</p>
                 <div className='flex gap-2 items-center'>
                 <span className='flex items-center gap-1'><Image src={map} alt="map icon" />{active}</span>
                 <span className='flex items-center gap-1'><Image src={minimize} alt="map icon" />{level}</span>
                 </div>
              </div>
              </div>
              <button className='rounded-[10px] py-3 px-8 text-white  text-[23px] bg-primary'>
            {btn}
              </button>
           </div>
        </div>
    )
}
