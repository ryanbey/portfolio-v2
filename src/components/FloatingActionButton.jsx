import { useEffect, useState } from 'react'
import { IconButton } from '.'
import css from '../styles/FloatingActionButton.module.scss'
import arrowUp from '../assets/icons/arrow-up.png'

export default function FloatingActionButton() {
  const [showFAB, setShowFAB] = useState(false)

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 450) {
      setShowFAB(true)
    } else {
      setShowFAB(false)
    }
  }

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth'})

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={css.floatingActionButton} show-fab={showFAB.toString()}>
      <IconButton icon={arrowUp} emphasis="high" title="Scroll to top" onClick={handleClick} />
    </div>
  )
}
