import nyoomLogo from '../assets/images/nyoom-logo.webp'
import justpicksomethingLogo from '../assets/images/justpicksomething-logo.png'
import circletracksLogo from '../assets/images/circletracks-logo.png'

const projects = [
  {
    title: 'Nyoom',
    description: 'Jan 2023 — Present',
    positions: [
      { description: 'A super fast driver stats website for iRacing members meant to offer a more performant and user-friendly alternative to the outdated profile pages on the old iRacing member site. Built using the official iRacing API.' }],
    image: nyoomLogo.src,
    skills: ['React', 'Next.js', 'JavaScript', 'SCSS', 'Cypress', 'Photoshop', 'XD'],
    url: 'https://nyoom.app',
  },
  {
    title: 'Circle Tracks',
    description: 'Jun — Aug 2022',
    positions: [{ description: 'Full-stack single page app for learning about all of the tracks that the top 3 NASCAR national series race at.' }],
    image: circletracksLogo.src,
    skills: ['Angular', 'TypeScript', 'SCSS', 'MongoDB', 'Node.js', 'Photoshop', 'XD'],
    githubRepoUrl: 'https://github.com/ryanbey/circle-tracks',
  },
  {
    title: 'Just Pick Something',
    description: 'Mar — Jun 2022',
    positions: [{ description: 'A fun web app to help your friends and family make decisions on activites using a tournament style bracket system. Start with a list of choices for fast food, movies, or date night ideas and see which one ends up on top.' }],
    image: justpicksomethingLogo.src,
    skills: ['HTML', 'CSS', 'JavaScript', 'XD'],
    url: 'https://ryanbey.github.io/just-pick-something/',
    githubRepoUrl: 'https://github.com/ryanbey/just-pick-something',
  },
]

export default projects