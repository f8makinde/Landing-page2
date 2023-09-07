import React from 'react'
import logo from "../../../public/material-symbols_school-outline.svg";
import Image from 'next/image';
const navigation = {
    aboutUs: [
      { name: 'Home', href: '#' },
      { name: 'What we do', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    services: [
      { name: 'Become a Tutor', href: '#' },
      { name: 'Hire a Tutor', href: '#' },
      { name: 'Learning Categories', href: '#' },
      { name: 'Post a Job', href: '#' },
      { name: 'Jobs', href: '#' },
    ],
    career: [
      { name: 'Join Us', href: '#' },
      { name: 'Our Teams', href: '#' },
    ],
    followUs: [
      { name: 'Facebook', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Twitter', href: '#' },
    ],
  }
const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-[1440px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-[70px]">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <Image
            src={logo}
            alt="Company name"
          />
          <p className="text-secondary font-medium text-xl">
Bridging the gap between Students and Tutors, easing the learning process and making it available for all
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary">About Us</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.aboutUs.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-xl text-secondary font-medium">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-2xl font-semibold text-primary">Services</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-xl text-secondary font-medium">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary">Career</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.career.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-xl text-secondary font-medium">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-2xl font-semibold text-primary">Follow Us</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.followUs.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-xl text-secondary font-medium">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t flex md:flex-row flex-col md:gap-y-0 gap-y-4 justify-between md:items-center border-gray-200 pt-8 text-lg text-secondary">
        <p> 2023&copy; Copyright.  All rights reserved</p>
        <ul className='flex md:flex-row flex-col  md:gap-x-[35px] gap-y-3'>
           <li>
           FAQ
           </li>
           <li>
           Privacy Policy
           </li>
           <li>
           Terms & Conditions
           </li>
           <li>
           Code of Conduct
           </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
