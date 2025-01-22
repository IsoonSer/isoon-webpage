import { TopicCardProperties } from './interface_card';

import sth_intern from '../assets/sth_intern.png'
import sth_intern2 from '../assets/sth_intern2.jpg'

export const worxExperienceData: TopicCardProperties = {
    topicName: "Work Experience",
    cardData: [
        {
            duration: "2024",
            event: "Internship as Junior IT Security Consultant at STH",
            images: [sth_intern, sth_intern2],
            descriptions: [
                "Internship as Junior IT Security Consultant at STH, from April to October 2024.",
                "Assisted staff with various tasks and gained knowledge in IT, software, application security, and penetration testing.",
                "Learned a lot about web application penetration testing and vulnerabilities in web applications.",
                "Assigned to a project: Network Simulation for Penetration Testing. Upgraded vulnerable VMs to Windows 11, hosted on Proxmox, provisioned with Terraform, and configured with Ansible to be vulnerable.",
                "Conducted penetration testing on all VMs to ensure they were exploitable.",
                "Learned Windows and Linux command-line operations and how to automate VM deployment and configuration.",
                "Grateful to my mentor for guidance and support during the internship.",
                "Special thanks to all the pentesters at STH for helping me with so many topics throughout the internship."
            ]
        }
    ]
};