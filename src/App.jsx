import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples/Examples.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts concepts={ CORE_CONCEPTS } />
        <Examples />
      </main>
    </>
  );
}