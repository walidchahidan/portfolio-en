import React from 'react';
import ReactDOM from 'react-dom/client';
import { Competances } from './components/competances/competances';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Nav } from './components/nav/nav';



import ParticlesBackground from './components/ParticlesBackground';
import { Presentation } from './components/presentation/present';
import { Projects } from './components/projects/projects';
import { Up } from './components/up/up';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Header/>
   <Nav/>
   <Presentation/>
   <Projects/>
   <Competances/>
   <Contact/>
   <Footer/>
   <Up/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

