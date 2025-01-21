import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
    return (
        <div className='flex flex-col gap-3 font-medium'>
            <div>
                <FontAwesomeIcon className='mr-2' icon={faArrowRight} />
                About Me
            </div>
            <div>My Projects</div>
            <div>My Activities</div>
            <div>My Experience</div>
        </div>
    )
}

export default Navbar