import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ContactProps {
    selectedIcon: IconDefinition
}

const ContactIcon = ({selectedIcon}: ContactProps) => {
    return (
        <FontAwesomeIcon className='hover:scale-110 hover:text-third transition-all hover:cursor-pointer' icon={selectedIcon} />
    )
}
export default ContactIcon