import { TopicCardProperties } from './interface_card';

import laos_math from '../assets/laos_math.jpg'

import posn1 from '../assets/posn1.jpg'
import posn1_2 from '../assets/posn1_2.jpg'

import award2nd from '../assets/2nd.jpg'
import award3rd from '../assets/3rd.jpg'

import eitAward from '../assets/EITAward.jpg'

export const myPrideData: TopicCardProperties = {
    topicName: "My Pride",
    cardData: [
        {
            duration: "2019",
            event: "Received the first runner-up award in the 2019 Local Talent Competition in Mathematics.",
            images: [laos_math],
            descriptions: [
                "Qualified to represent my school and the Kalasin Provincial Administrative Organization (อบจ. Kalasin) in the final round.",
                "Participated in the competition with high school students from all regions of Thailand, under the jurisdiction of local administrative organizations (LAOs).",
                "Had an amazing experience, as the questions were very challenging.",
                "Received a cash prize of 10,000 Baht, which I used to buy an iPad."
            ]
        },
        {
            duration: "2019",
            event: "Attended POSN Camp (Computer Olympiad) at Khon Kaen University.",
            images: [posn1, posn1_2],
            descriptions: [
                "Participated in Camp 1 at Kaennakorn Wittayalai School and Camp 2 at the Department of Computer Science, Faculty of Science, Khon Kaen University.",
                "Learned how mathematics is deeply related to computer science, sparking my initial interest in the field.",
                "Gained foundational knowledge in computer programming, data structures, and algorithms.",
                "Met many talented friends who were exceptionally skilled, inspiring me to strive for excellence."
            ]
        },
        {
            duration: "2021-2022",
            event: "Receive an award on Teacher Appreciation Day.",
            images: [award2nd, award3rd],
            descriptions: [
                "Received a certificate for achieving 1st honors in academic excellence during the 1st and 2nd years of Computer Engineering in the academic year 2021-2022.",
                "Earned the same award in the 3rd year but couldn't attend the ceremony as I was doing cooperative education in Bangkok.",
                "Grateful to my friends who studied alongside me and were always there to answer my questions. Your support played a crucial role in my achievements."
            ]
        },
        {
            duration: "2024",
            event: "Distinguished Engineering Student Award for the year 2024.",
            images: [eitAward],
            descriptions: [
                "Certificate for receiving the Distinguished Engineering Student Award for the year 2024.",
                "This prestigious award is given to the student with the highest honors in the Faculty of Engineering at each university.",
                "I am honored to receive this award as the top engineering student at Khon Kaen University with a GPA of 3.94.",
                "I would like to express my sincere gratitude to everyone who has supported me throughout this journey."
            ]
        }
    ]
};