
import {aboutMeData} from '../../contents/about-me.ts'

import { myPrideData } from '../../contents/my-pride.ts'

import { worxExperienceData } from '../../contents/work-experience.ts'

import TopicCard from '../../components/TopicCard/index.tsx'

const RightSection = () => {
    return (
        <div className='flex flex-col gap-10 mx-10'>
            
            <TopicCard topicName={aboutMeData.topicName} cardData={aboutMeData.cardData} />

            <TopicCard topicName={myPrideData.topicName} cardData={myPrideData.cardData} />

            <TopicCard topicName={worxExperienceData.topicName} cardData={worxExperienceData.cardData} />
            


            
            
            <div className='mb-96'>About Me</div>
            <div className='mb-96'>About Me</div>
            <div className='mb-96'>About Me</div>
            <div>My Projects</div>
            <div>My Activities</div>
            <div>Experience</div>
        </div>
    )
}
export default RightSection