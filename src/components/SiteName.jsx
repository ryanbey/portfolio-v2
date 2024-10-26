import css from '../styles/SiteName.module.scss'

export default function SiteName({ dense = false }) {
  return (
    <a href="/">
      <p className={css.siteName} style={{ margin: dense ? '0px' : '20px 0px' }}>
        ryanbey.dev
      </p>
    </a>
  )
}
