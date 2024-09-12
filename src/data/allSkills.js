import experience from './experience'
import projects from './projects'
import education from './education'

const experienceSkills = experience.map((experience) => experience.skills)
const projectsSkills = projects.map((project) => project.skills)
const educationSkills = education.map((education) => education.skills)
const allSkills = [...experienceSkills, ...projectsSkills, ...educationSkills].flat()

const skillCounts = allSkills.reduce((acc, skill) => {
  acc[skill] = (acc[skill] || 0) + 1
  return acc
}, {})

const allSkillsWithCounts = Object.entries(skillCounts)
  .map(([skillName, count]) => ({
    skillName,
    count
  }))
  .sort((a, b) => {
    // Order alphabetically for items with the same count
    if (b.count === a.count) {
      return a.skillName.localeCompare(b.skillName)
    }
    // Order by count
    return b.count - a.count
  })

export default allSkillsWithCounts