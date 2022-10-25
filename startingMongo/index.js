/*
Starting to use MONGO... 

JavaScript (NODE.JS) will conduct runtime environment opertations.

An express server will be running up this app. Some JavaScript code will be 
written just for some code repition of ES6 concepts i learned today.
(OCT-24th-2022)
*/
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 
// express imported, app set to express methods, port set. 

const makeDeveloper = ({firstName, lastName}) => {
  return(`${firstName}-${lastName} is a full stack developer!`)
}
// makeDeveloper function created passed two parameters wrapped in curly braces
// These parameters will be pulling values from the object created below. 
const thisDeveloper = {
  firstName:"Jonathan", 
  lastName:"Mohabir"
}
// an object is created with two properties matching the parameters of the makeDevelper function
app.get('/newdeveloper', (req, res) => {
  res.send(makeDeveloper(thisDeveloper))
});
// route to send jonathan the developer. 

const techStack = {
  language:"JavaScript", 
  UI:"React", 
  database:"MongoDB"
};

const{language, database} = techStack; 
// grabbing both properties from the techstack object. 
app.get('/programminglang', (req,res)=> {
res.send(language);  
})
app.get('/datastorage', (req, res) => {
  res.send(database)
})
app.get('/stack', (req, res) => {
  res.send(techStack); 
})
// three routes created.
// one sending the value of language, database, and the whole techStack object/ 






app.get('/', (req, res) => {
  res.send('User has landed onto the home page'); 
})
// home route and response created for default page.
app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}, press ctrl+c to end.`)
})
// listen statement created. 

