import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import Section from '../Section/Section.jsx';

export default function CoreConcepts({ concepts }) {

  return (
    <Section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        { concepts.map((concept) => <CoreConcept key={ concept.title } { ...concept } />) }
      </ul>
    </Section>
  );
}