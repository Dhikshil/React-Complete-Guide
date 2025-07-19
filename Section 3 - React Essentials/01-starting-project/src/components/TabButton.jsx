export default function TabButton({children, onClick}) {
    return (<li>
        <button onClick={onClick}>{children}</button>
    </li>);
}
/*

Component Composition
Your task is to create a reusable Card component that takes a name prop as an input and, in addition, can be wrapped around any JSX code.

Use the already existing Card.js file to create the Card component in there. You can add the card CSS class to the main wrapping element in that component for some styling.

The name prop should be output as a title inside the Card component, the wrapped JSX code should be output below that title.

For example, the final Card component, should be usable like this:

<Card name="Maria Miles">
  <p>
    Maria is a professor of Computer Science at the University of Illinois.
  </p>
  <p>
    <a href="mailto:blake@example.com">Email Maria</a>
  </p>
</Card>

// App.jsx
import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default App;

// card.js

export default function Card(props) {
    return(
        <section class = "card">
            <h2>{props.name}</h2>
            {props.children}
        </section>
    );
}

index.css

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#dfdee0, #c3c3c4);
  color: #e5d9f1;
  min-height: 100vh;
}

.card {
  margin: 2rem auto;
  padding: 2rem;
  max-width: 30rem;
  border-radius: 6px;
  background: linear-gradient(#254041, #203031);
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}

.card h2 {
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: #e5d9f1;
}

.card p {
  margin: 0.5rem 0;
}

.card a {
  color: #b3f4f6;
  text-decoration: none;
}

*/