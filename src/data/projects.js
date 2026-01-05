import nyoomLogo from '../assets/images/nyoom-logo.webp'
import nyoom1 from '../assets/images/projects/nyoom/nyoom-1.jpg'
import nyoom2 from '../assets/images/projects/nyoom/nyoom-2.jpg'
import nyoom3 from '../assets/images/projects/nyoom/nyoom-3.jpg'
import nyoom4 from '../assets/images/projects/nyoom/nyoom-4.jpg'
import justpicksomethingLogo from '../assets/images/justpicksomething-logo.png'
import justPickSomething1 from '../assets/images/projects/just-pick-something/just-pick-something-1.jpg'
import justPickSomething2 from '../assets/images/projects/just-pick-something/just-pick-something-2.jpg'
import justPickSomething3 from '../assets/images/projects/just-pick-something/just-pick-something-3.jpg'
import justPickSomething4 from '../assets/images/projects/just-pick-something/just-pick-something-4.jpg'
import memoryCard1 from '../assets/images/projects/memory-card/memory-card-1.jpg'
import memoryCard2 from '../assets/images/projects/memory-card/memory-card-2.jpg'
import memoryCard3 from '../assets/images/projects/memory-card/memory-card-3.jpg'
import memoryCard4 from '../assets/images/projects/memory-card/memory-card-4.jpg'
import memoryViewer1 from '../assets/images/projects/memory-viewer/memory-viewer-1.jpg'
import memoryViewer2 from '../assets/images/projects/memory-viewer/memory-viewer-2.jpg'
import memoryViewer3 from '../assets/images/projects/memory-viewer/memory-viewer-3.jpg'
import memoryViewer4 from '../assets/images/projects/memory-viewer/memory-viewer-4.jpg'
import internationalHomePage1 from '../assets/images/projects/international-home-page/international-home-page-1.jpg'
import internationalHomePage2 from '../assets/images/projects/international-home-page/international-home-page-2.jpg'
import circleTracks1 from '../assets/images/projects/circle-tracks/circle-tracks-1.jpg'
import circleTracks2 from '../assets/images/projects/circle-tracks/circle-tracks-2.jpg'
import circleTracks3 from '../assets/images/projects/circle-tracks/circle-tracks-3.jpg'
import circleTracks4 from '../assets/images/projects/circle-tracks/circle-tracks-4.jpg'
import circleTracks5 from '../assets/images/projects/circle-tracks/circle-tracks-5.jpg'
import portfolioV11 from '../assets/images/projects/portfolio-v1/portfolio-v1-1.jpg'
import portfolioV12 from '../assets/images/projects/portfolio-v1/portfolio-v1-2.jpg'
import portfolioV13 from '../assets/images/projects/portfolio-v1/portfolio-v1-3.jpg'
import portfolioV14 from '../assets/images/projects/portfolio-v1/portfolio-v1-4.jpg'
import nastracks1 from '../assets/images/projects/nastracks/nastracks-1.jpg'
import nastracks2 from '../assets/images/projects/nastracks/nastracks-2.jpg'
import nastracks3 from '../assets/images/projects/nastracks/nastracks-3.jpg'
import nastracks4 from '../assets/images/projects/nastracks/nastracks-4.jpg'
import nastracks5 from '../assets/images/projects/circle-tracks/circle-tracks-5.jpg'
import chamber1 from '../assets/images/projects/chamber/chamber-1.jpg'
import chamber2 from '../assets/images/projects/chamber/chamber-2.jpg'
import chamber3 from '../assets/images/projects/chamber/chamber-3.jpg'
import circletracksLogo from '../assets/images/circletracks-logo.png'
import fsLogo from '../assets/images/familysearch-logo.png'
import morssengerLogo from '../assets/images/morssenger-logo.png'
import nastracksLogo from '../assets/images/nastracks-logo.png'
import chamberLogo from '../assets/images/chamber-logo.png'
import portfolioV1Logo from '../assets/images/portfolio-v1-logo.png'
import simpleTrailsLogo from '../assets/images/simple-trails-logo.png'

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
  xml: 'XML',
}

const projects = [
  {
    title: 'Nyoom',
    description: 'Jan 2023 - Present',
    positions: [
      { description: 'An iRacing stats website visited by 2,000 iRacers per month offering a more user-friendly, performant, and focused experience.' }],
    image: nyoomLogo.src,
    skills: [skills.react, skills.nextjs, skills.javascript, skills.css, skills.cypress, skills.photoshop, skills.xd],
    category: categories.web,
    links: [
      { Visit: 'https://nyoom.app' },
    ],
    gallery: [nyoom3.src, nyoom1.src, nyoom2.src, nyoom4.src],
  },
  {
    title: 'Just Pick Something',
    description: 'Mar - Jun 2022',
    positions: [{ description: 'A fun web app to help your friends and family make decisions on activites using a tournament style bracket system.' }],
    image: justpicksomethingLogo.src,
    skills: [skills.html, skills.css, skills.javascript, skills.photoshop, skills.xd],
    category: categories.web,
    links: [
      { Visit: 'https://ryanbey.github.io/just-pick-something/' },
      { GitHub: 'https://github.com/ryanbey/just-pick-something' },
    ],
    gallery: [justPickSomething2.src, justPickSomething3.src, justPickSomething4.src, justPickSomething1.src],
  },
  {
    title: 'Memory Card',
    description: 'Jul - Aug 2024',
    positions: [
      { description: 'A flexible and responsive card for displaying six variants of user-uploaded files handling titles, descriptions, images, comments, and more.' },
    ],
    skills: [skills.react, skills.javascript, skills.css, skills.storybook, skills.jest,],
    category: categories.web,
    image: fsLogo.src,
    links: [
      { Visit: 'https://beta.familysearch.org/frontier/zion/iframe.html?args=&id=shared-components-memorycard--all-types&viewMode=story' }
    ],
    gallery: [memoryCard1.src, memoryCard2.src, memoryCard3.src, memoryCard4.src],
  },
  {
    title: 'Memory Viewer',
    description: 'Aug 2023 - May 2024',
    positions: [
      { description: 'A complex file viewer, metadata editor, and person tagger for user-uploaded photos, stories, documents, and recordings.' },
    ],
    skills: [skills.react, skills.javascript, skills.css, skills.storybook, skills.jest,],
    category: categories.web,
    image: fsLogo.src,
    links: [
      { Visit: 'https://www.familysearch.org/en/memories/memory/53694167' }
    ],
    gallery: [memoryViewer1.src, memoryViewer2.src, memoryViewer3.src, memoryViewer4.src],
  },
  {
    title: 'International Home Page',
    description: 'Aug - Nov 2022',
    positions: [
      { description: 'A brand new home page ported from Polymer to React to introduce millions of new users to FamilySearch in over 40 languages.' },
    ],
    skills: [skills.react, skills.javascript, skills.css, skills.jest,],
    category: categories.web,
    image: fsLogo.src,
    links: [
      { Visit: 'https://www.familysearch.org/en/global' },
    ],
    gallery: [internationalHomePage1.src, internationalHomePage2.src]
  },
  {
    title: 'Circle Tracks',
    description: 'Jun - Aug 2022',
    positions: [
      { description: 'Full-stack single page app for learning about all of the tracks that the top 3 NASCAR national series visit every year.' },
    ],
    image: circletracksLogo.src,
    skills: [skills.angular, skills.typescript, skills.css, skills.mongodb, skills.nodejs, skills.photoshop, skills.xd],
    category: categories.web,
    links: [
      { GitHub: 'https://github.com/ryanbey/circle-tracks' },
    ],
    gallery: [circleTracks1.src, circleTracks2.src, circleTracks3.src, circleTracks4.src, circleTracks5.src],
  },
  {
    title: 'NASTRACKS',
    description: 'May - Jul 2021',
    positions: [
      { description: "My first website! It simply displays information about all of the tracks that the top 3 NASCAR series visit every year." },
    ],
    skills: [skills.html, skills.css, skills.xd],
    category: categories.web,
    links: [
      { Visit: 'https://nastracks.glitch.me/index.html' },
    ],
    image: nastracksLogo.src,
    gallery: [nastracks1.src, nastracks2.src, nastracks3.src, nastracks4.src, nastracks5.src],
  },
  {
    title: 'Chamber of Commerce',
    description: 'Nov - Dec 2021',
    positions: [
      { description: "A fun project to remake my hometown's Chamber of Commerce site to show them how bad they were at web design. I'm kidding, it was a school project. But can you imagine?" },
    ],
    skills: [skills.html, skills.css, skills.xd],
    category: categories.web,
    links: [
      { Visit: 'https://ryanbey.github.io/wdd-230/bakersfield-chamber' },
    ],
    image: chamberLogo.src,
    gallery: [chamber1.src, chamber2.src, chamber3.src],
  },
  {
    title: 'Portfolio v1',
    description: 'Oct - Nov 2021',
    positions: [
      { description: 'My first portfolio site I made from scratch using plain old HTML, CSS, and JavaScript. Made during college to showcase my favorite projects, classes, and skills to recruiters and friends.' },
    ],
    skills: [skills.html, skills.css, skills.javascript],
    category: categories.web,
    links: [
      { Visit: 'https://ryanbey.github.io/portfolio' },
      { GitHub: 'https://github.com/ryanbey/portfolio' },
    ],
    image: portfolioV1Logo.src,
    gallery: [portfolioV11.src, portfolioV12.src, portfolioV13.src, portfolioV14.src],
  },
  {
    title: 'Portfolio v2',
    description: 'Aug 2024 - Mar 2025',
    positions: [
      { description: "You are here! My second, updated portfolio site to try to convince you that I'm at least sort of cool. Made in part to explore a new JavaScript frameowrk, Astro." },
    ],
    skills: [skills.astro, skills.react, skills.javascript, skills.css],
    category: categories.web,
    links: [
      { GitHub: 'https://github.com/ryanbey/portfolio-v2' },
    ],
  },
  {
    title: 'Morssenger',
    description: 'Nov - Dec 2019',
    positions: [
      { description: "Android app that allows messaging with live input translation to and from Morse code with audio or haptic message playback. I promise I didn't copy Monday.com's logo on purpose. Please don't sue me." },
    ],
    skills: [skills.java, skills.xml, skills.androidstudio, skills.photoshop, skills.xd],
    category: categories.mobile,
    links: [
      { GitHub: 'https://github.com/ryanbey/Morssenger' }
    ],
    image: morssengerLogo.src,
  },
  {
    title: 'Simple Trails',
    description: 'May - Jul 2021',
    positions: [{ description: 'I was the design lead of a team of 8 students for this college UX design project for a mobile hiking app. We conducted multiple user studies including creating detailed personas, scenarios, storyboards, usability studies, and prototypes.' }],
    skills: [skills.photoshop, skills.xd],
    category: categories.mobile,
    links: [
      { Prototype: 'https://xd.adobe.com/view/396bbf71-8c28-4f8e-9ea8-7902173c9cfb-6c38/?fullscreen&hints=off' }
    ],
    image: simpleTrailsLogo.src,
  },
]

export default projects