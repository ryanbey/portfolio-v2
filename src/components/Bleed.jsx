export default function Bleed({ sides, children }) {
  return (
    <div style={{ marginLeft: `-${sides}px`, marginRight: `-${sides}px` }}>
      {children}
    </div>
  )
}
