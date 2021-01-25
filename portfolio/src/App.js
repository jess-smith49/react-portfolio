import React, {useState} from "react";


//IMPORTING FILES FROM COMPONENTS 
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  const [sections] = useState([
    {
      name: 'Projects', description: 'Check out my work here!'
    },
    {
      name: 'Resume', description: 'Interested in my work? Look at my background!'
    },
    {
      name: 'Contact', description: 'Contact me for inquiries!'
    }
  ]);

  
  return (
   <div>
     <Nav> </Nav>
     <main>
       <About></About>
     </main>
     <Footer></Footer>
   </div>
  );
}

export default App;
