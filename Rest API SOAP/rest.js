//------------------------------------------------------------- recuest  
// Example: GET /users/123
//To access the value of the “id” parameter, you can use req.params.id in your route handler.
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Perform operations using the userId
});


//Example: GET /users?name=John&age=25
//The req.query object allows you to retrieve data from the URL query string. 
//The query string is the portion of the URL after the question mark (?) 
//and consists of key-value pairs separated by ampersands (&).
app.get('/users', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    // Perform operations using the name and age
});

// Example: POST /users
// The req.body object allows you to retrieve data sent in the request body, 
// typically used for POST or PUT requests. To access the data, you need to
//  use a middleware such as body-parser or the built-in express.json middleware.
app.post('/users', (req, res) => {
    const userData = req.body;
    // Perform operations using the userData
  });

//   Conclusion:
// Use req.params when you have dynamic segments in your route patterns, req.query
// when you want to retrieve data from the query string, and req.body for data sent in the request body