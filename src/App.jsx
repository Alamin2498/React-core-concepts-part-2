
import './App.css'
import Counter from './Counter';
import Team from '../Team';
import Users from '../Users';
import Friends from '../Friends';



function App() {

  function handleClick(){
   console.log("The button has been clicked");
   alert("the button has been clicked")
  }
  const hancleClick2= ()=>{
    alert("button two clicked")
  }  

  const handleClick3 =(num)=>{
    alert(num+3);
  }

  return (
    <>
     
      <h1>React core concepts</h1>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>
      <Counter></Counter>
  
      
      <button onClick={handleClick}>Click me</button>
      <button onClick={hancleClick2}>Clicked me</button>
      <button onClick={()=>handleClick3(5)}>3rd button</button>
    </>
  )
}

export default App
