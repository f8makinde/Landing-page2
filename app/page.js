import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Tutors from './components/Tutors'
import Footer from './components/Footer'
import Popular from './components/Popular'

export default function Home() {
  return (
   <div>
     <Navbar />
     <Hero />
     <Categories />
     <Tutors />
     <Popular />
     <Footer />
    </div>
  )
}
