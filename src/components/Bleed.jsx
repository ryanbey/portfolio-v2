export default function Bleed({ sides, children, className }) {
  return (
    <div style={{ marginLeft: `-${sides}px`, marginRight: `-${sides}px` }} className={className}>
      {children}
    </div>
  )
}
