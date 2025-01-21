import bksLogo from '../../assets/bks.png'
import kkuLogo from '../../assets/kku.png'
import enKkuLogo from '../../assets/enkku.png'
import award2nd from '../../assets/2nd.jpg'
import award3rd from '../../assets/3rd.jpg'
import eitAward from '../../assets/EITAward.jpg'

const RightSection = () => {
    return (
        <div className='flex flex-col gap-10 mx-10'>
            <div className=''>
                <div className='mb-6'>
                    <h2 className="text-lg font-semibold">About Me</h2>
                </div>
                <div className="ml-4 flex flex-col gap-6">
                    <div className="grid grid-cols-[20%_80%] gap-4">
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p>2015-2021</p>
                            </div>
                            <div className='flex flex-row'>
                                <img className='max-w-24 max-h-24 border-2 border-[#c7b06b] rounded-md' src={bksLogo} alt="high school" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div><h3 className='text-base font-medium'>Secondary School</h3></div>
                            <div>
                                <ul className='list-disc ml-4'>
                                    <li>Buakhao School</li>
                                    <li>Passionate about mathematics, with numerous opportunities to represent my school in competitions and earn many awards.</li>
                                    <li>Struggled with English, biology, and chemistry.</li>
                                    <li>Consistently failed math exams in class during grades 7 and 8, despite my passion for the subject.</li>
                                    <li>Discovered the existence of computer engineering as a field of study in grade 11 when I joined an Olympiad camp at Kaennakhon Witthayalai School.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[20%_80%] gap-4">
                        <div className='flex flex-col gap-4'>
                            <div>
                                2021-2025
                            </div>
                            <div className='flex flex-col gap-3'>
                                <img className='max-w-24 max-h-24 border-2 border-[#c7b06b] rounded-md bg-white' src={kkuLogo} alt="high school" />
                                <img className='max-w-24 max-h-24 border-2 border-[#c7b06b] rounded-md bg-white' src={enKkuLogo} alt="high school" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div><h3 className='text-base font-medium'>University</h3></div>
                            <div>
                                <ul className='list-disc ml-4'>
                                    <li>Studying at Khon Kaen University, Faculty of Engineering, majoring in Computer Engineering.</li>
                                    <li>Majority of the classes focus on mathematics related to computers and engineering.</li>
                                    <li>Striving to find my true self, but still searching.</li>
                                    <li>Try so hard to find myself but now still don't found</li>
                                    <li>Working hard to improve my English skills, as most slides and textbooks are in English.</li>
                                    <li>Passionate about learning how computers work.</li>
                                    <li>Not skilled at graphic design and don't do it well.</li>
                                    <li>Heartbroken for the first time.</li>
                                    <li>Have met so many wonderful friends.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='mb-6'>
                    <h2 className="text-lg font-semibold">My Pride</h2>
                </div>
                <div className="ml-4 flex flex-col gap-6">
                    <div className="grid grid-cols-[20%_80%] gap-4">
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p>2021-2022</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                {/* <a href={award2nd} target='__blank'>
                                    
                                </a> */}
                                <img className='max-w-24 max-h-24 border-2 border-[#c7b06b] rounded-md bg-white' src={award2nd} alt="high school" />
                                <img className='max-w-24 max-h-24 border-2 border-[#c7b06b] rounded-md bg-white' src={award3rd} alt="high school" />
                                {/* <a href={award3rd} target='__blank'>
                                    
                                </a> */}
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div><h3 className='text-base font-medium'>Receive an award on Teacher Appreciation Day.</h3></div>
                            <div>
                                <ul className='list-disc ml-4'>
                                    <li>Received a certificate for achieving 1st honors in academic excellence during the 1st and 2nd years of Computer Engineering in the academic year 2021-2022.</li>
                                    <li>Earned the same award in the 3rd year but couldn't attend the ceremony as I was doing cooperative education in Bangkok.</li>
                                    <li>Grateful to my friends who studied alongside me and were always there to answer my questions. Your support played a crucial role in my achievements.</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[20%_80%] gap-4">
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p>2024</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                             
                                <img className='max-w-24 max-h-24 border-2 border-[#c7b06b] rounded-md bg-white' src={eitAward} alt="high school" />
                            
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div><h3 className='text-base font-medium'>Distinguished Engineering Student Award for the year 2024.</h3></div>
                            <div>
                                <ul className='list-disc ml-4'>
                                    <li>Certificate for receiving the Distinguished Engineering Student Award for the year 2024.</li>
                                    <li>This prestigious award is given to the student with the highest honors in the Faculty of Engineering at each university.</li>
                                    <li>I am honored to receive this award as the top engineering student at Khon Kaen University with a GPA of 3.94.</li>
                                    <li>I would like to express my sincere gratitude to everyone who has supported me throughout this journey.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mb-96'>About Me</div>
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