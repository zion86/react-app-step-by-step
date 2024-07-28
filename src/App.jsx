import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
  function handleSelect() {
    console.log('Hello');
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((concept) => <CoreConcept { ...concept } />) }
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={ handleSelect }>Components</TabButton>
            <TabButton onSelect={ handleSelect }>JSX</TabButton>
            <TabButton onSelect={ handleSelect }>Props</TabButton>
            <TabButton onSelect={ handleSelect }>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;