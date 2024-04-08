// useContext() = React Hook that allows you to share values
//                between multiple levels of components WITHOUT
//                passing props through each level.

//!  Provider Component
//?  1. Import {createContext} from 'react'
//?  2. export const MyContext = createContext()
//?  3. <MyContext.Provider value={value}>
//      <Child />
//      </MyContext.Provider>


//! Consumer Components
//? 1. Import React, {useContext} form 'react'
//?   import {MyContext} from './ComponentA';
//? 2. const value = useContext(MyContext);

import ComponentA from "./ComponentA.jsx";
function App() {

  return (
    <>
      <ComponentA/>
    </>
  )
}

export default App
