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

