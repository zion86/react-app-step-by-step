export default function Section({ title, children, className }) {
  return (
    <section id={ className }>
      <h2>{ title }</h2>
      { children }
    </section>
  )
}