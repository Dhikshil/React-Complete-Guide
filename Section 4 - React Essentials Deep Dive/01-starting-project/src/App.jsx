import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
   
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <CoreConcepts />
        </section>
        <section id="examples">
          <Examples />
        </section>
      </main>
    </>
  );
}

export default App;
