import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="app">
      <h1>Project-4B (Animations) By <a href="https://gopaldas.surge.sh">
        
        Gopal
        </a>
        </h1>
      <div className="card" data-aos="fade-down"><h2>Animation 1</h2></div>
      <div className="card" data-aos="fade-left"><h2>Animation 2</h2></div>
      <div className="card" data-aos="fade-right"><h2>Animation 3</h2></div>
      <div className="card" data-aos="fade-up-right"><h2>Animation 4</h2></div>
      <div className="card" data-aos="zoom-out"><h2>Animation 5</h2></div>
      <div className="card" data-aos="flip-down"><h2>Animation 6</h2></div>
      <div className="card" data-aos="fade-down"><h2>Animation 7</h2></div>
      <div className="card" data-aos="zoom-out"><h2>Animation 8</h2></div>
      <div className="card" data-aos="zoom-in"><h2>Animation 9</h2></div>
      <div className="card" data-aos="flip-left"><h2>Animation 10</h2></div>
      {/* <div className="card" data-aos="flip-left">Animation 10</div> */}
      
    </div>
  );
}

export default App;
