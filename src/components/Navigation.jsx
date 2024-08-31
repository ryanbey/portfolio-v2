import { useCallback, useEffect, useMemo, useState } from 'react'
import css from'../styles/Navigation.module.scss'

function Tab({ selectedTab, setSelectedTab, title, url }) {
  const style = useMemo(() => url === selectedTab ? { background: 'var(--background)', color: 'var(--text-primary) !important' } : {}, [selectedTab, title])
  const handleClick = useCallback(() => setSelectedTab(url), [setSelectedTab, title])

  return (
    <a class={css.navLink} href={url} style={style} onClick={handleClick}>{title}</a>
  )
}

export default function Navigation() {
  const [selectedTab, setSelectedTab] = useState('/')

  useEffect(() => {
    setSelectedTab(window.location.pathname)
  }, [])

  return (
    <nav>
      <Tab title="Home" url="/" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="Projects" url="/projects" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="Skills" url="/skills" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="Artwork" url="/artwork" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="About" url="/about" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </nav>
  )
}
