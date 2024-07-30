import { useState } from 'react';
import TabButton from '../TabButton/TabButton.jsx';
import Section from '../Section/Section.jsx';
import { EXAMPLES } from '../../data.js';
import './Examples.css';

export default function Examples() {

  const [ selectedTopic, setSelectedTopic ] = useState(null);
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{ EXAMPLES[ selectedTopic ].title }</h3>
        <p> { EXAMPLES[ selectedTopic ].description }</p>
        <pre>
          <code>{ EXAMPLES[ selectedTopic ].code }</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title='Examples' className='examples'>
      <menu>
        <TabButton isSelected={ selectedTopic === 'components' } onSelect={ () => handleSelect('components') }>Components</TabButton>
        <TabButton isSelected={ selectedTopic === 'jsx' } onSelect={ () => handleSelect('jsx') }>JSX</TabButton>
        <TabButton isSelected={ selectedTopic === 'props' } onSelect={ () => handleSelect('props') }>Props</TabButton>
        <TabButton isSelected={ selectedTopic === 'state' } onSelect={ () => handleSelect('state') }>State</TabButton>
      </menu>
      { !selectedTopic && tabContent }
      { selectedTopic && tabContent }
    </Section>
  );
}