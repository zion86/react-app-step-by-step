import CoreConcept from '../CoreConcept/CoreConcept.jsx';

export default function CoreConcepts({ concepts }) {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        { concepts.map((concept) => <CoreConcept key={ concept.title } { ...concept } />) }
      </ul>
    </section>
  );
}