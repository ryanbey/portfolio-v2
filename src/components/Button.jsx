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

export default function Button({
  children,
  emphasis = "low",
  icon = null,
  iconRight = false,
  iconSize = "lg",
  onClick,
  target,
  to,
  type = "submit",
}) {
  const showIcon = icon?.src

  return (
    <a href={to} target={target}>
      <button className={css[emphasis]} type={type} icon-size={iconSize} >
        {showIcon && !iconRight && (<Icon icon={icon} iconSize={iconSize} />)}
        {children}
        {showIcon && iconRight && (<Icon icon={icon} iconSize={iconSize} />)}
      </button>
    </a>
  )
}
