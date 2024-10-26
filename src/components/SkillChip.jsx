// import { useCallback } from "react"
import css from '../styles/SkillChip.module.scss'

export default function SkillChip({ icon = null, text, count, to }) {
  const handleClick = () => {
    console.log(`clicked on ${text} chip!`)
    // window.open(to), [to]
  }

  return (
    <button className={css.skillChip} onClick={handleClick}>
      {icon?.src && <img src={icon.src} alt='' aria-hidden />}
      {text}
      {count && <span className={css.skillCount}>{count}</span>}
    </button>
  )
}
