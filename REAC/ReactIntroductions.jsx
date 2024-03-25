// 1)
//Hooks allow function components to have access to state and other React features. 
//Because of this, class components are generally no longer needed.

// 2) What is a Hook?
//Hooks allow us to "hook" into React features such as state and lifecycle methods.


//3) 
//   Hook Rules
// There are 3 rules for hooks:

// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional
//Hooks will not work in React class components.



// When state is updated, the entire state gets overwritten.

// What if we only want to update the color of our car?

// If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

// We can use the JavaScript spread operator to help us.
// Use the JavaScript spread operator to update only the color of the car:
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);