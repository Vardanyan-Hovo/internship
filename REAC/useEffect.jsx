// This useEffect will execute the setData(getData()) function only once,
// when the component mounts. The [] passed as the second argument signifies (mens)
// that there are no dependencies, so the effect will run only after the initial 
// render.
useEffect(() => {
    setData(getData())
}, []);





//This useEffect doesn't have a dependency array specified. Therefore, it will run after every 
//render of the component, as it implicitly depends on any state or props used inside it. This can 
//lead to unnecessary executions of the effect if it doesn't actually depend on any values.
useEffect(() => {
    setData(getData())
});

//Passing an empty object {} as the second argument has the same effect as not specifying the 
//dependency array at all. Thus, this useEffect will also run after every render of the component, 
//regardless of whether the data it depends on has changed or not.
useEffect(() => {
    setData(getData())
}, {});



// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, 
//the effect will run again:
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}



// Some effects require cleanup to reduce memory leaks.
function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    }, []);
  
    return <h1>I've rendered {count} times!</h1>;
  }
  


