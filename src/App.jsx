import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
  console.log('APP COMPONENT EXECUTING');

  let [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
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
            <TabButton onSelect={ () => handleSelect('components') }>Components</TabButton>
            <TabButton onSelect={ () => handleSelect('jsx') }>JSX</TabButton>
            <TabButton onSelect={ () => handleSelect('props') }>Props</TabButton>
            <TabButton onSelect={ () => handleSelect('state') }>State</TabButton>
          </menu>
          { selectedTopic }
        </section>
      </main>
    </div>
  );
}

export default App;