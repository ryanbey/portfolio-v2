import { useState } from 'react'
import { Bleed } from '.'
import { Squeeze as Hamburger } from 'hamburger-react' // https://hamburger-react.netlify.app/

export default function MobileNavigation({ pathname }) {
  const [toggled, setToggled] = useState()

  const handleToggle = () => setToggled(!toggled)

  return (
    <Bleed sides={11}>
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
