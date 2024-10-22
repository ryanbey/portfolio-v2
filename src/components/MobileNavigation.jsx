import React, { useState } from 'react'
// https://hamburger-react.netlify.app/
import { Squeeze as Hamburger } from 'hamburger-react'

export default function MobileNavigation({ pathname }) {
  const [toggled, setToggled] = useState()

  const handleToggle = () => setToggled(!toggled)

  return (
    <Hamburger
      toggled={toggled}
      toggle={handleToggle}
      size={24}
      color='var(--text-primary)'
      label="Show navigation menu"
      rounded
    />
  )
}
