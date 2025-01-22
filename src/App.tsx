
import './App.css'

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
