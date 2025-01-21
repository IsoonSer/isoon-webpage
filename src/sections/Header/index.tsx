import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fileResume from '../../assets/resume.pdf'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'
import myImg from '../../assets/ENP00042.jpeg'

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='ml-7 mb-4'>
                <img className='max-w-32 max-h-32 object-cover rounded-full border-4 border-secondary' src={myImg} alt="" />
            </div>

            <div className='text-3xl font-semi-bold'>{data.name}</div>
            <div className='text-fourth font-semibold'>{data.title}</div>
            <div className='py-4'>
                <a href={data.link} target='__blank' className=''>
                    <span className='bg-fourth text-primary py-2 px-4 rounded-lg hover:bg-secondary hover:text-fourth transition-all'><FontAwesomeIcon className='ml-[-0.25rem]' icon={faArrowRight} /> {data.btnText}</span>
                </a>
            </div>
        </div>
    )
}

export default Header