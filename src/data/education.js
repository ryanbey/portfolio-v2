import byuiLogo from '../assets/images/byui-logo.svg'
import { skills } from './projects'

const education = [
  {
    title: 'BYU-Idaho',
    description: 'B.S. Software Engineering',
    image: byuiLogo.src,
    positions: [
      {
        description: 'Changed my major a couple times until I took my first web development class as an elective. I fell in love with it, changed my major to Software Engineering, and the rest is history. 3.7 GPA.'
      },
    ],
    skills: [skills.html, skills.css, skills.javascript, skills.typescript, skills.angular, skills.nodejs, skills.express, skills.php, skills.cpp, skills.photoshop, skills.xd]
  },
]

export default education
