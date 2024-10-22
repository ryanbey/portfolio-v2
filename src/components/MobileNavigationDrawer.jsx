import { Bleed } from '.'
import { Squeeze as Hamburger } from 'hamburger-react'
import css from '../styles/MobileNavigationDrawer.module.scss'

export default function MobileNavigationDrawer({ pathname, buttonProps }) {
  const { toggled } = buttonProps

  return (
    <div className={css.mobileNavContainer} style={{ left: toggled ? '0px' : '-500px', transition: '300ms ease' }}>
      <div className={css.mobileNavContent}>
        <p>Mobile Nav Drawer {pathname}</p>
        <Bleed sides={11}>
          <Hamburger {...buttonProps}/>
        </Bleed>
      </div>
    </div>
  )
}
