import { useCallback, useMemo, useState } from 'react'
import '../styles/Navigation.module.scss'

function Tab({ selectedTab, setSelectedTab, title, url }) {
  const style = useMemo(() => title === selectedTab ? { background: 'var(--background)' } : {}, [selectedTab, title])
  const handleClick = useCallback(() => setSelectedTab(title), [setSelectedTab, title])

  return (
    <a href={url} style={style} onClick={handleClick}>{title}</a>
  )
}

export default function Navigation() {
  const [selectedTab, setSelectedTab] = useState('Home')

  return (
    <nav>
      <Tab title="Home" url="/" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="Projects" url="/projects" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="Artwork" url="/artwork" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="Skills" url="/skills" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tab title="About" url="/about" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </nav>
  )
}
