import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"


function App() {

  useEffect(()=> {
    document.title= "Chris Ellis Portfolio";
    (function () {
      var burger = document.querySelector(".burger");
      var menu = document.querySelector("#" + burger.dataset.target);
      burger.addEventListener("click", function () {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      });
    })();
  })
  
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path='/React-Portfolio' component={Home} />
        <Route exact path='/React-Portfolio/about' component={About} />
        <Route exact path='/React-Portfolio/portfolio' component={Portfolio} />
        <Route exact path='/React-Portfolio/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
