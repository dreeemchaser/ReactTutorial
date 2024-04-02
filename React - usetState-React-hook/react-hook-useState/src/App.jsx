import Counter from "./Counter.jsx";

{/*   React hook -> Special function that allows functional components to use React features without writing class components.
      userState() = React hook that allows the creation of a stateful variable AND a setter function the update its value in the virtual DOM
      [name, setName]
*/}

function App() {

  return (
      <>
          <Counter/>
      </>
  );


}

export default App
