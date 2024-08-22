import { useCallback } from "react"
import css from '../styles/SkillChip.module.scss'

export default function SkillChip({ icon = null, text, to }) {
  const handleClick = useCallback(() => window.open(to), [to])

  return (
    <button onClick={handleClick}>
      {icon?.src && <img src={icon.src} alt='' aria-hidden />}
      {text}
    </button>
  )
}
