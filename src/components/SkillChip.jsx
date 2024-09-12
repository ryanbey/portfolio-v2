import { useCallback } from "react"
import css from '../styles/SkillChip.module.scss'

export default function SkillChip({ icon = null, text, count, to }) {
  // const handleClick = useCallback(() => window.open(to), [to])

  return (
    <button className={css.skillChip} onClick={() => console.log(`Clicked on ${text} chip!`)}>
      {icon?.src && <img src={icon.src} alt='' aria-hidden />}
      {text}
      {count && <span className={css.skillCount}>{count}</span>}
    </button>
  )
}
