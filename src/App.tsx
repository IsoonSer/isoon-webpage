import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'


function App() {


  return (
    <div className='mt-14 max-w-6xl mx-auto grid lg:grid-cols-[35%_65%]'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default App
