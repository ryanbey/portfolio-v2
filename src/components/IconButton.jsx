import css from '../styles/IconButton.module.scss'

export default function IconButton({ icon, title, emphasis = 'low', to, target, onClick }) {
  return (
    <a href={to} target={target}>
      <button title={title} className={css[emphasis]} onClick={onClick}>
        <img src={icon.src} alt="" aria-hidden draggable="false" />
      </button>
    </a>
  )
}
