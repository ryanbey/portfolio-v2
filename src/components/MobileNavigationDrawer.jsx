import { useCallback, useEffect, useMemo, useState } from 'react'
import { Bleed, SiteName, Spacer } from '.'
import { Squeeze as Hamburger } from 'hamburger-react'
import css from '../styles/MobileNavigationDrawer.module.scss'

function MobileTab({ selectedTab, setSelectedTab, title, url }) {
  const style = useMemo(() => url === selectedTab ? { background: 'var(--foreground)', color: 'var(--text-primary)' } : {}, [selectedTab, title])
  const handleClick = useCallback(() => setSelectedTab(url), [setSelectedTab, title])

  return (
    <a className={css.mobileNavLink} href={url} style={style} onClick={handleClick}>{title}</a>
  )
}

export default function MobileNavigationDrawer({ pathname, buttonProps }) {
  const [selectedTab, setSelectedTab] = useState('/')
  const { toggled } = buttonProps

  useEffect(() => {
    setSelectedTab(pathname)
  }, [pathname])

  return (
    <div className={css.mobileNavContainer} style={{ left: toggled ? '0px' : '-500px', transition: '250ms ease' }}>
      <div className={css.mobileNavHeader}>
        <SiteName />
        <Bleed sides={11}>
          <Hamburger {...buttonProps}/>
        </Bleed>
      </div>

      <nav className={css.mobileNavList}>
        <MobileTab title="Home" url="/" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <MobileTab title="Projects" url="/projects" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <MobileTab title="About" url="/about" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <MobileTab title="Contact" url="/contact" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </nav>
    </div>
  )
}
