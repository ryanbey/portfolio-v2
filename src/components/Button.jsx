import { useCallback } from 'react'
import css from '../styles/Button.module.scss'

export default function Button({ icon = null, iconSize = "lg", emphasis = "low", onClick, to, target, children }) {
  const handleClick = useCallback(() => {
    if (to) {
      target ? window.open(to, target) : window.location.href = to
    } else if (onClick) {
      onClick()
    }
  }, [onClick, to])

  return (
    <button onClick={handleClick} className={css[emphasis]} >
      {icon?.src && (
        <img
          src={icon.src}
          height={iconSize === 'sm' ? 16 : 22}
          width={iconSize === 'sm' ? 16 : 22}
          alt=""
          aria-hidden
        />
      )}
      {children}
    </button>
  )
}
