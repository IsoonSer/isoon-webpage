import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import ContactIcon from "./ContactIcon"


const Contact = () => {

    const iconList: IconDefinition[] = [faGithub, faLinkedin, faEnvelope]

    return (
        <div className='flex flex-col justify-end'>
            <div className='flex flex-row gap-2 text-xl pb-10'>
                {
                    iconList.map((icon, index) => (<ContactIcon key={index} selectedIcon={icon} />))
                }
            </div>
        </div>
    )
}
export default Contact