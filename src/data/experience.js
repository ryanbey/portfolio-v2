import fsLogo from '../assets/images/familysearch-logo.png'
import { skills } from './projects'

const experience = [
  {
    company: 'FamilySearch',
    tenure: 'Aug 2022 - Present',
    image: fsLogo.src,
    positions: [
      {
        title: 'Web Developer II',
        tenure: 'Jan 2023 - Present',
        description: 'Building and maintaining robust React components and pages across the Memories product. Frequent contributor to our internal design system building reusable components used across the site. Closely mentored a web developer intern including onboarding, regular guidance, and fostering independent problem solving skills.'
      },
      {
        title: 'Web Developer Intern',
        tenure: 'Aug 2022 - Dec 2022',
        description: "Converted the site's worldwide home page from Polymer to React with support for 40 languages. Discovered and improved accessibility issues across our team's product. Contributed to our internal design system.",
      }
    ],
    skills: [skills.react, skills.javascript, skills.css, skills.jest, skills.storybook, skills.jira, skills.heroku, skills.split]
  },
]

export default experience
