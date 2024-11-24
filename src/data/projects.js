import nyoomLogo from '../assets/images/nyoom-logo.webp'
import justpicksomethingLogo from '../assets/images/justpicksomething-logo.png'
import circletracksLogo from '../assets/images/circletracks-logo.png'
import fsLogo from '../assets/images/familysearch-logo.png'
import morssengerLogo from '../assets/images/morssenger-logo.png'
import nastracksLogo from '../assets/images/nastracks-logo.png'
import chamberLogo from '../assets/images/chamber-logo.png'
import portfolioV1Logo from '../assets/images/portfolio-v1-logo.png'

export const categories = { web: 'web', mobile: 'mobile', artwork: 'artwork' }
export const skills = {
  androidstudio: 'Android Studio',
  angular: 'Angular',
  astro: 'Astro',
  cpp: 'C++',
  css: 'CSS/SCSS',
  cypress: 'Cypress',
  express: 'Express',
  heroku: 'Heroku',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript',
  jest: 'Jest',
  jira: 'Jira',
  mongodb: 'MongoDB',
  nextjs: 'Next.js',
  nodejs: 'Node.js',
  photoshop: 'Photoshop',
  php: 'PHP',
  react: 'React',
  split: 'Split.io',
  storybook: 'Storybook',
  typescript: 'TypeScript',
  xd: 'XD',
}

const projects = [
  {
    title: 'Nyoom',
    description: 'Jan 2023 - Present',
    positions: [
      { description: 'A super fast driver stats website for iRacing members meant to offer a more performant and user-friendly alternative to the outdated profile pages on the old iRacing member site. Built using the official iRacing API.' }],
    image: nyoomLogo.src,
    skills: [skills.react, skills.nextjs, skills.javascript, skills.css, skills.cypress, skills.photoshop, skills.xd],
    category: categories.web,
    links: [
      { Visit: 'https://nyoom.app' },
    ]
  },
  {
    title: 'Just Pick Something',
    description: 'Mar - Jun 2022',
    positions: [{ description: 'A fun web app to help your friends and family make decisions on activites using a tournament style bracket system. Start with a list of choices for fast food, movies, or date night ideas and see which one ends up on top.' }],
    image: justpicksomethingLogo.src,
    skills: [skills.html, skills.css, skills.javascript, skills.photoshop, skills.xd],
    category: categories.web,
    links: [
      { GitHub: 'https://github.com/ryanbey/just-pick-something' },
      { Visit: 'https://ryanbey.github.io/just-pick-something/' },
    ]
  },
  {
    title: 'Memory Card',
    description: 'Jul - Aug 2024',
    positions: [
      { description: 'A flexible and responsive card for displaying six variants of user-uploaded content (memories), with each variant having varying amounts of metadata including titles, descriptions, images, comments, and more.' },
      { description: "I rewrote this component from the ground up introducing new features and better responsiveness with less than half the amount code. This vastly lessened the component's cognitive complexity and made it much easier for developers to work with." },
    ],
    skills: [skills.react, skills.javascript, skills.css, skills.storybook, skills.jest,],
    category: categories.web,
    image: fsLogo.src,
    links: [
      { Visit: 'https://www.familysearch.org/tree/person/memories/KNDX-MKG' }
    ]
  },
  {
    title: 'Memory Viewer',
    description: 'Jun 2023 - Mar 2024 (?)',
    positions: [
      { description: 'A complex file viewer, metadata editor, and person tagger for user-uploaded photos, stories, documents, and recordings of their ancestors. Built to give users more power and control over the memories they share with the world.' },
      { description: 'The main things I worked on were the side menu layout and navigation, tagging logic, next/previous functionality, and substantial performance optimizations.' }
    ],
    skills: [skills.react, skills.javascript, skills.css, skills.storybook, skills.jest,],
    category: categories.web,
    image: fsLogo.src,
    links: [
      { Visit: 'https://www.familysearch.org/memories/memory/172126330?a=1349257' }
    ]
  },
  {
    title: 'International Home Page',
    description: 'Aug - Nov 2022 (?)',
    positions: [
      { description: 'A brand new home page ported from Polymer to React to introduce new users to our site in over 40 languages. This included making smart layout and design decisions to accomodate for verbose languages and conditionally displaying certain parts of the page for specific areas of the world.' },
    ],
    skills: [skills.react, skills.javascript, skills.css, skills.jest,],
    category: categories.web,
    image: fsLogo.src,
    links: [
      { Visit: 'https://www.familysearch.org/es' },
    ]
  },
  {
    title: 'Circle Tracks',
    description: 'Jun - Aug 2022',
    positions: [
      { description: 'Full-stack single page app for learning about all of the tracks that the top 3 NASCAR national series race at. This was my first time using a JavaScript framework and luckily my last time using Angular.' },
      { description: "Unfortunately, this site has been taken down as the database it was using was no longer free." },
    ],
    image: circletracksLogo.src,
    skills: [skills.angular, skills.typescript, skills.css, skills.mongodb, skills.nodejs, skills.photoshop, skills.xd],
    category: categories.web,
    links: [
      { GitHub: 'https://github.com/ryanbey/circle-tracks' },
    ]
  },
  {
    title: 'Portfolio v1',
    description: '??? - ???',
    positions: [
      { description: 'My first portfolio site I made from scratch using plain old HTML, CSS, and JavaScript. Made during college to showcase my favorite projects, classes, and skills to recruiters and friends.' },
    ],
    skills: [skills.html, skills.css, skills.javascript],
    category: categories.web,
    links: [
      { GitHub: 'https://github.com/ryanbey/portfolio' },
      { Visit: 'https://ryanbey.github.io/portfolio' },
    ],
    image: portfolioV1Logo.src,
  },
  {
    title: 'Portfolio v2',
    description: '??? - ???',
    positions: [
      { description: "You are here! My second, much more modern and nicer, portfolio site to try to convince you that I'm at least sort of cool. Made in part to explore a new JavaScript frameowrk, Astro." },
    ],
    skills: [skills.astro, skills.react, skills.javascript, skills.css],
    category: categories.web,
    links: [
      { GitHub: 'https://github.com/ryanbey/portfolio-v2' },
    ],
  },
  {
    title: 'NASTRACKS',
    description: '??? - ???',
    positions: [
      { description: "My first website! It simply displays information about all of the tracks that the top 3 NASCAR series visit every year." },
    ],
    skills: [skills.html, skills.css, skills.xd],
    category: categories.web,
    links: [
      { Visit: 'https://nastracks.glitch.me/index.html' },
    ],
    image: nastracksLogo.src,
  },
  {
    title: 'Chamber of Commerce',
    description: '??? - ???',
    positions: [
      { description: "A fun project to remake my hometown's Chamber of Commerce site to show them how bad they were at web design. I'm kidding, it was a school project. But can you imagine?" },
    ],
    skills: [skills.html, skills.css, skills.xd],
    category: categories.web,
    links: [
      { Visit: 'https://ryanbey.github.io/wdd-230/bakersfield-chamber' },
    ],
    image: chamberLogo.src,
  },
  {
    title: 'Morssenger',
    description: 'Nov - Dec 2019',
    positions: [
      { description: 'A team-built Android app that allows messaging with live input translation to and from Morse code with options for audio or haptic message playback.' },
      { description: "Funny story, the logo is insanely similar to monday.com. I designed it with zero knowledge that company even existed, and basically made exact the same logo. Please don't sue me." },
    ],
    skills: [skills.java, skills.androidstudio, skills.photoshop, skills.xd],
    category: categories.mobile,
    links: [
      { GitHub: 'https://github.com/ryanbey/Morssenger' }
    ],
    image: morssengerLogo.src,
  },
  {
    title: 'Simple Trails',
    description: '??? - ???',
    skills: [skills.photoshop, skills.xd],
    category: categories.mobile,
    links: [
      { Prototype: 'https://xd.adobe.com/view/396bbf71-8c28-4f8e-9ea8-7902173c9cfb-6c38/?fullscreen&hints=off' }
    ],
  },
]

export default projects