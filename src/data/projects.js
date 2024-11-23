import nyoomLogo from '../assets/images/nyoom-logo.webp'
import justpicksomethingLogo from '../assets/images/justpicksomething-logo.png'
import circletracksLogo from '../assets/images/circletracks-logo.png'
import fsLogo from '../assets/images/familysearch-logo.png'

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
      { visit: 'https://nyoom.app' },
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
      { gitHub: 'https://github.com/ryanbey/just-pick-something' },
      { visit: 'https://ryanbey.github.io/just-pick-something/' },
    ]
  },
  {
    title: 'Circle Tracks',
    description: 'Jun - Aug 2022',
    positions: [{ description: 'Full-stack single page app for learning about all of the tracks that the top 3 NASCAR national series race at. This was my first time using a JavaScript framework and luckily my last time using Angular.' }],
    image: circletracksLogo.src,
    skills: [skills.angular, skills.typescript, skills.css, skills.mongodb, skills.nodejs, skills.photoshop, skills.xd],
    category: categories.web,
    links: [
      { gitHub: 'https://github.com/ryanbey/circle-tracks' },
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
      { visit: 'https://www.familysearch.org/memories/memory/172126330?a=1349257' }
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
      { visit: 'https://www.familysearch.org/tree/person/memories/KNDX-MKG' }
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
      { visit: 'https://www.familysearch.org/es' },
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
      { gitHub: 'https://github.com/ryanbey/portfolio' },
      { visit: 'https://ryanbey.github.io/portfolio' },
    ],
  },
  {
    title: 'Portfolio v2',
    description: '??? - ???',
    positions: [
      { description: "You are here! My second, much more modern and cooler, portfolio site to try to convince you that I'm at least sort of cool. Made in part to explore a new JavaScript frameowrk, Astro." },
    ],
    skills: [skills.astro, skills.react, skills.javascript, skills.css],
    category: categories.web,
    links: [
      { gitHub: 'https://github.com/ryanbey/portfolio-v2' },
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
      { visit: 'https://nastracks.glitch.me/index.html' },
    ],
  },
  {
    title: 'Chamber of Commerce',
    description: '??? - ???',
    positions: [
      { description: "A fun project to remake my hometown's Chamber of Commerce site to show them how bad they were at web design. I'm kidding, it was a school project. But can you imagine?" },
    ],
    skills: [skills.astro, skills.react, skills.javascript, skills.css, skills.xd],
    category: categories.web,
    links: [
      { visit: 'https://ryanbey.github.io/wdd-230/bakersfield-chamber' },
    ],
  },
  {
    title: 'Morssenger',
    skills: [skills.java, skills.androidstudio, skills.photoshop, skills.xd],
    category: categories.mobile,
  },
  {
    title: 'Simple Trails',
    skills: [skills.photoshop, skills.xd],
    category: categories.mobile,
  },
  // {
  //   title: 'Branding',
  //   skills: [skills.photoshop],
  //   category: categories.artwork,
  // },
  // {
  //   title: 'iRacing',
  //   skills: [skills.photoshop],
  //   category: categories.artwork,
  // },
  // {
  //   title: 'Polyscapes',
  //   skills: [skills.photoshop],
  //   category: categories.artwork,
  // },
]

export default projects