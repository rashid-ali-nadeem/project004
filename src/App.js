import React from 'react';
import Dinner from './dinner';



function App() {
  const name = "Rashid"
  return (
  <div>
    <h2>Hello from Rashid</h2>
    <Dinner dishName = "Chicken Tikka" sweetDish = "Kheer"/>
    <br/>
    <Dinner dishName = "Chicken Biryani" sweetDish = "Gajar ka Halwa"/>
    <hr/>
    <Dinner dishName = "Nihari" sweetDish = "Custored"/>  
  </div>
  )
}

export default App;
