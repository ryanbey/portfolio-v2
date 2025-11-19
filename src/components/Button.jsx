import css from '../styles/Button.module.scss'

function Icon({ icon = null, iconSize }) {
  return (
    <img
      src={icon}
      height={iconSize === 'sm' ? 16 : 22}
      width={iconSize === 'sm' ? 16 : 22}
      alt=""
      aria-hidden
    />
  )
}

export default function Button({
  children,
  disabled,
  emphasis = "low",
  icon = null,
  iconRight = false,
  iconSize = "lg",
  onClick,
  target,
  to,
  type = "submit",
}) {
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <a href={to} target={target}>
      <button
        type={type}
        icon-size={iconSize}
        onClick={handleClick}
        className={css[emphasis]}
        disabled={disabled}
      >
        {icon && !iconRight && (<Icon icon={icon} iconSize={iconSize} />)}
        {children}
        {icon && iconRight && (<Icon icon={icon} iconSize={iconSize} />)}
      </button>
    </a>
  )
}
