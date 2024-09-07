import nyoomLogo from '../assets/images/nyoom-logo.webp'
import justpicksomethingLogo from '../assets/images/justpicksomething-logo.png'

const projects = [
  {
    title: 'Nyoom',
    positions: [
      { description: 'A super fast driver stats website for iRacing members meant to offer a more performant and user-friendly alternative to the outdated iRacing profile pages on the old iRacing member site.' }],
    image: nyoomLogo.src,
    skills: ["React", "Next.js", "SCSS", "Cypress", "Photoshop", "XD"],
    url: 'https://nyoom.app',
  },
  {
    title: 'Just Pick Something',
    positions: [{ description: 'A fun web app to help your friends and family make decisions on activites using a tournament style bracket system. Start with a list of choices for fast food, movies, or date night ideas and see which one ends up on top.' }],
    image: justpicksomethingLogo.src,
    skills: ["HTML", "CSS", "JavaScript", "XD"],
    url: 'https://ryanbey.github.io/just-pick-something/',
    githubRepoUrl: 'https://github.com/ryanbey/just-pick-something',
  },
]

export default projects