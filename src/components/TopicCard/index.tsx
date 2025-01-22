import { TopicCardProperties, EachCardProperties } from '../../contents/interface_card'
import EventCard from './EventCard'

const TopicCard = ({ topicName, cardData }: TopicCardProperties) => {
    return (
        <div className=''>
            <div className='mb-6'>
                <h2 className="text-lg font-semibold">{topicName}</h2>
            </div>
            <div className="ml-4 flex flex-col gap-6">
                {cardData.map((card: EachCardProperties, index: number) => (<EventCard key={index} duration={card.duration} event={card.event} images={card.images} descriptions={card.descriptions} />))}
            </div>
        </div>
    )
}
export default TopicCard