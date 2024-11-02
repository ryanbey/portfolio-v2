import nyoomLogo from '../assets/images/nyoom-logo.webp'
import justpicksomethingLogo from '../assets/images/justpicksomething-logo.png'
import circletracksLogo from '../assets/images/circletracks-logo.png'

export const categories = { web: 'web', mobile: 'mobile', artwork: 'artwork' }
export const skills = {
  androidstudio: 'Android Studio',
  angular: 'Angular',
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
    url: 'https://nyoom.app',
    category: categories.web,
  },
  {
    title: 'Circle Tracks',
    description: 'Jun - Aug 2022',
    positions: [{ description: 'Full-stack single page app for learning about all of the tracks that the top 3 NASCAR national series race at.' }],
    image: circletracksLogo.src,
    skills: [skills.angular, skills.typescript, skills.css, skills.androidstudio, skills.nodejs, skills.photoshop, skills.xd],
    githubRepoUrl: 'https://github.com/ryanbey/circle-tracks',
    category: categories.web,
  },
  {
    title: 'Just Pick Something',
    description: 'Mar - Jun 2022',
    positions: [{ description: 'A fun web app to help your friends and family make decisions on activites using a tournament style bracket system. Start with a list of choices for fast food, movies, or date night ideas and see which one ends up on top.' }],
    image: justpicksomethingLogo.src,
    skills: [skills.html, skills.css, skills.javascript, skills.photoshop, skills.xd],
    url: 'https://ryanbey.github.io/just-pick-something/',
    githubRepoUrl: 'https://github.com/ryanbey/just-pick-something',
    category: categories.web,
  },
  {
    title: 'Memory Viewer',
    skills: [skills.react, skills.javascript, skills.css, skills.storybook, skills.jest,],
    category: categories.web,
  },
  {
    title: 'Memory Card',
    skills: [skills.react, skills.javascript, skills.css, skills.storybook, skills.jest,],
    category: categories.web,
  },
  {
    title: 'Interational Home Page',
    skills: [skills.react, skills.javascript, skills.css, skills.jest,],
    category: categories.web,
  },
  {
    title: 'Portfolio v1',
    skills: [skills.html, skills.css, skills.javascript],
    category: categories.web,
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