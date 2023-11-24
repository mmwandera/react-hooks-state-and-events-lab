import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

// In the App component, there is a button for toggling between dark mode and light mode. Using the useState hook, create a state variable in the App component. Then, use that variable to determine if our app should be in dark mode or light mode.
// Add an event handler to the button that toggles the state variable between true and false.

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    // setDarkMode((prevMode) => !prevMode): This is another option i found from my research btw.
    // setDarkMode(!darkMode): I could use this as well 
    setDarkMode((darkMode) => !darkMode) // But i'll use this cause i can :)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode} className={appClass}>{darkMode? "Light Mode":"Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
