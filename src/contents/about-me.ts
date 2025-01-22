import { TopicCardProperties } from './interface_card';

import bksLogo from '../assets/bks.png'
import kkuLogo from '../assets/kku.png'
import enKkuLogo from '../assets/enkku.png'

export const aboutMeData: TopicCardProperties = {
    topicName: "About Me",
    cardData: [
        {
            duration: "2015-2021",
            event: "Secondary School",
            images: [bksLogo],
            descriptions: [
                "Buakhao School",
                "Passionate about mathematics, with numerous opportunities to represent my school in competitions and earn many awards.",
                "Struggled with English, biology, and chemistry.",
                "Consistently failed math exams in class during grades 7 and 8, despite my passion for the subject.",
                "Discovered the existence of computer engineering as a field of study in grade 11 when I joined an Olympiad camp at Kaennakhon Witthayalai School."
            ]
        },
        {
            duration: "2021-2025",
            event: "University",
            images: [kkuLogo, enKkuLogo],
            descriptions: [
                "Studying at Khon Kaen University, Faculty of Engineering, majoring in Computer Engineering.",
                "Majority of the classes focus on mathematics related to computers and engineering.",
                "Striving to find my true self, but still searching.",
                "Try so hard to find myself but now still don't found",
                "Working hard to improve my English skills, as most slides and textbooks are in English",
                "Passionate about learning how computers work.",
                "Not skilled at graphic design and don't do it well.",
                "Heartbroken for the first time.",
                "Have met so many wonderful friends."
            ]
        }
    ]
};