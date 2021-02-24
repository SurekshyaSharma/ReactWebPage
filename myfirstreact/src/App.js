import React from 'react'
import './App.css';
import hancy from "./murphyPhoto/hancy.jpg";
function Header(props){
  //prop object gonna hold all of the different properties for our component
  console.log(props);
  return(
    <header><h1>{props.name}'s Photo Gallery</h1></header>
  );
  
}

function Main(props){
  return(
<section>
  <p>{props.adjective} Photos</p>
  <img src={hancy} height ={300} alt="The Redbone Coonhound posing"></img>
  <ul style ={{textAlign:"left"}}>
    {props.images.map((image)=> <li key={image.id}>{image.title}</li>)}
  </ul>
</section>
  );

}

function Footer(props){
  return(
  <section>
    <p> Copyright {props.year}</p>
  </section>
  );

}

const images =[
  "3 Month Old",
  "4 Month Old",
  "5 Month Old",
  "6 Month Old",
  "7 Month Old",
  "8 Month Old",
  "9 Month Old",
  "10 Month Old",
  "11 Month Old",
]
//transformation function which going to map over an array and return an object
const imageObjects = images.map((image, i) =>({ id:i, title: image })) //solving the problem with rendering by returning object instead of string.
console.log(imageObjects);
// images.map((image)=> console.log(image));

function App() {
  //component is a function that returns UI
  return (
    <>
     <Header name="My Puppy Murphy"/>
     <Main adjective ="Awesome" images = {imageObjects}/> 
     <Footer year={new Date().getFullYear()}/>
    </>
  );
}

export default App;
