
//What do you need to add to the second argument of a useEffect 
//Hook to limit it to running only on the first render?
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
  }, []
);

  return <DisplayData data={data} />;
}


function Destruct(){
    const person = {
        name: 'Jesse',
        age: 30, 
        address: {
          city: 'Houston',
          state: 'Texas',
          country: 'USA'
        }
    }
    function App({address: { state }}){

    }
    function Spred(){
        // Use the spread operator to combine the following arrays.
        const arrayOne = ['a', 'b', 'c'];
        const arrayTwo = [1, 2, 3];
        const arraysCombined = [...arrayOne, ...arrayTwo];
    }
    function withoutReact(){
        // Render a <p> element without using JSX.
        const paragraph = React.createElement('p', {}, 'This is a paragraph without using JSX!');
            
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(paragraph);
    }
}

//Name the following React component "person".
function Person(props){
    return (
        <h2>Hi, I'm {props.name}</h2>
    )
}



function App(){
    //Complete this statement that renders a JavaScript expression inside JSX.
    const myelement = <h1>React is {10 * 10} times better with JSX!</h1>;

    //Complete this expression to include a class attribute the way JSX supports.
    const title = <h1 className="primary">Hello World!</h1>;

    return(
        <div>
            <h4>Complete the array method that will allow you to run a function 
                on each item in the array and return a new array.</h4>
                <section>
                    {
                        myArray.map((item) => <p key={item.id}>{item}</p>)
                    }
                </section>
                <section>
                    {myelement}
                </section>
        </div>
    )
}


//Complete this component which uses properties.
function Person2(props){
    return (
        <>
            <h1>hy i am a {props.name}</h1>
            <button onClick={clicked}>Click Me!</button>
        </>
    )
}
const root = ReactDOM.createElement(document.getElementById("root"));
root.render(<Person2 name="karen" />)




//Add the attribute that allows React to keep track of elements in lists.
function GroceryList(){
    const items = [
        {id: 1, name: 'bread'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'eggs'}
    ];
    return(
        <>
            <ul>
                {
                    items.map((e)=><li key={e.id}>{e.name}</li>)
                }
            </ul>
        </>
    )
}

const root2 = ReactDom.createRoot(document.getElementById("root"));

root2.render(<GroceryList/>)






