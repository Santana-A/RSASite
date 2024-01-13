import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import LandingSection from '../LandingSection'
import InfoSection from '../InfoSection'
import { homeObjOne } from '../InfoSection/Data'
import { homeObjTwo } from '../InfoSection/Data'
import Algorithms from '../Algorithms'
import Example from '../Example'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <LandingSection />
    <InfoSection {...homeObjOne} />
    <Algorithms toggle={toggle} />
    <Example />
    <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home
