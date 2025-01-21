import Contact from "../Contact"
import Header from "../Header"
import Navbar from "../Navbar"

const LeftSection = () => {
    return (
        <div className=''>
            <div className='ml-6 sticky top-14 grid grid-rows-[42%_42%_16%] min-h-[700px] h-[calc(100vh-3.5rem)]'>
                <Header />
                <Navbar />
                <Contact />
            </div>
        </div>
    )
}

export default LeftSection