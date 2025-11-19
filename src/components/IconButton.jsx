import css from '../styles/IconButton.module.scss'

export default function IconButton({ icon = null, title, emphasis = 'low', to, target, onClick }) {
  return (
    <a href={to} target={target}>
      <button title={title} className={css[emphasis]} onClick={onClick}>
        <img src={icon} alt="" aria-hidden draggable="false" />
      </button>
    </a>
  )
}
