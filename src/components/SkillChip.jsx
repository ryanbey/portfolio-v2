// import { useCallback } from "react"
import css from '../styles/SkillChip.module.scss'

export default function SkillChip({ icon = null, text, count, to }) {
  // Uncomment when clicking on these things actually does something
  // const handleClick = () => {
  //   console.log(`clicked on ${text} chip!`)
    // window.open(to), [to]
  // }

  return (
    <button className={css.skillChip}>
      {icon?.src && <img src={icon.src} alt='' aria-hidden />}
      {text}
      {count && <span className={css.skillCount}>{count}</span>}
    </button>
  )
}
