import { useState } from 'react'
import { Bleed } from '.'
import { Squeeze as Hamburger } from 'hamburger-react' // https://hamburger-react.netlify.app/
import css from '../styles/MobileNavigation.module.scss'

export default function MobileNavigation({ pathname }) {
  const [toggled, setToggled] = useState()

  const handleToggle = () => setToggled(!toggled)

  return (
    <Bleed sides={11} className={css.container}>
      <Hamburger
        toggled={toggled}
        toggle={handleToggle}
        size={24}
        color="var(--text-primary)"
        label="Show navigation menu"
        rounded
      />
    </Bleed>
  )
}
