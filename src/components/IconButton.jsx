import { useCallback } from 'react'
import css from '../styles/IconButton.module.scss'

export default function IconButton({ icon, title, emphasis = 'low', to, target, onClick }) {
  const handleClick = useCallback(() => {
    if (to) {
      target ? window.open(to, target) : window.location.href = to
    } else if (onClick) {
      onClick()
    }
  }, [])

  return (
    <button title={title} onClick={handleClick} className={css[emphasis]}>
      <img src={icon.src} alt="" aria-hidden />
    </button>
  )
}
