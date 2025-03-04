// import { useCallback } from 'react'
import css from '../styles/Button.module.scss'

function Icon({ icon, iconSize }) {
  return (
    <img
      src={icon.src}
      height={iconSize === 'sm' ? 16 : 22}
      width={iconSize === 'sm' ? 16 : 22}
      alt=""
      aria-hidden
    />
  )
}

export default function Button({ icon = null, iconSize = "lg", emphasis = "low", iconRight = false, onClick, to, target, children }) {
  const showIcon = icon?.src

  // const handleClick = useCallback(() => {
  //   if (to) {
  //     target ? window.open(to, target) : window.location.href = to
  //   } else if (onClick) {
  //     onClick()
  //   }
  // }, [onClick, to])

  return (
    <a href={to} target={target}>
      <button className={css[emphasis]} >
        {showIcon && !iconRight && (<Icon icon={icon} iconSize={iconSize} />)}
        {children}
        {showIcon && iconRight && (<Icon icon={icon} iconSize={iconSize} />)}
      </button>
    </a>
  )
}
