export default function Bleed({ all, sides, top, bottom, children, className }) {
  return (
    <div
      style={{
        marginLeft: `-${all || sides}px`,
        marginRight: `-${all || sides}px`,
        marginTop: `-${all || top}px`,
        marginBottom: `-${all || bottom}px`
      }}
      className={className}
    >
      {children}
    </div>
  )
}
