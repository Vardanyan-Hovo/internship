// React useContext Hook
// /React Context is a way to manage state globally.


// Պատկերացնելու համար մենք ունենք բազմաթիվ ներդիր բաղադրիչներ:
// Դույլի վերևում և ներքևում գտնվող բաղադրիչին անհրաժեշտ է մուտք գործել վիճակ:
// State should be held by the highest parent component in the 
//tack that requires access to the state.

//<<< prop drilling. >>>
// The component at the top and bottom of the stack need access to the state.
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";


// To create context, you must Import createContext and initialize it:
const UserContext = createContext()

function Component1() {
    const [user, setUser] = useState("Jesse Hall");
  
    return (
        //Wrap child components in the Context Provider and supply the state value.
      <UserContext.Provider value={user}>
        {/* //Now, all components in this tree will have access to the user Context. */}
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    );
  }




//   include the useContext in the import statement:
  import { useState, createContext, useContext } from "react";


//   Then you can access the user Context in all components:
function Component5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }







//   Here is the full example using React Context:
// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

// const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);