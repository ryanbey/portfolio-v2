import { useState } from 'react'
import { Bleed, MobileNavigationDrawer } from '.'
import { Squeeze as Hamburger } from 'hamburger-react' // https://hamburger-react.netlify.app/
import css from '../styles/MobileNavigation.module.scss'

export default function MobileNavigation({ pathname }) {
  const [showNavDrawer, setShowNavDrawer] = useState(false)
  const handleToggle = () => setShowNavDrawer(!showNavDrawer)
  const buttonProps = {
    color: "var(--text-primary)",
    duration: 0.3,
    label: "Show navigation menu",
    rounded: true,
    size: 24,
    toggle: handleToggle,
    toggled: showNavDrawer,
  }

  return (
    <>
      <Bleed sides={11} className={css.container}>
        <Hamburger {...buttonProps}/>
      </Bleed>
      <MobileNavigationDrawer pathname={pathname} buttonProps={buttonProps} />
    </>
  )
}
