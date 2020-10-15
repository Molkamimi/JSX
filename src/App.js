import React from 'react';
import './App.css';
import image1 from './barbie/image1.jpg';
import mickey1 from './video/mickey1.mp3';
import './style.css';
function App() {
  return (
    <div className="App">
       <h1 class="titlered">MICKEY AND BARBIE</h1>


   <img src={image1} alt ='barbie' /><br/>
   <img src="mickey/image2.jpg" alt="mickey"/><br/>   
   <audio controls src={mickey1} /><br/>

    </div>
  );
}

export default App;
