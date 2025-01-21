import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <div className='flex flex-col justify-end'>
            <div className='flex flex-row gap-2 text-xl pb-10'>
              <FontAwesomeIcon className='hover:scale-x-110 hover:text-third transition-all' icon={faGithub} />
              <FontAwesomeIcon className='hover:scale-x-110 hover:text-third transition-all' icon={faLinkedin} />
              <FontAwesomeIcon className='hover:scale-x-110 hover:text-third transition-all' icon={faEnvelope} />
            </div>
          </div>
    )
}
export default Contact