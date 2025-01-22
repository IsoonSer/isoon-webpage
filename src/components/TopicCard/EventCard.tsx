import { EachCardProperties } from '../../contents/interface_card'

const EventCard = ({ duration, event, images, descriptions }: EachCardProperties) => {
    return (
        <div className="grid grid-cols-[20%_80%] gap-4">
            <div className='flex flex-col gap-4'>
                <div>
                    <p>{duration}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    {images.map((image: string, index: number) => (
                        <img key={index} className='bg-white max-w-24 max-h-24 border-2 border-[#c7b06b] rounded-md' src={image} alt="high school" />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div><h3 className='text-base font-medium'>{event}</h3></div>
                <div>
                    <ul className='list-disc ml-4'>
                        {descriptions.map((description: string, index: number) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default EventCard