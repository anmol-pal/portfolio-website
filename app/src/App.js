import './App.css';
import { useState, useRef, useEffect } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import WorkAndEducation from './components/WorkAndEducation';
import 'tailwindcss/tailwind.css';
function App() {
  const [showText, setShowText] = useState(false);

  const handleTypewriterComplete = () => {
    setShowText(true)
  }

  return (
    <div className='flex flex-col h-screen'>
        <div className="bg-custom-background bg-no-repeat bg-cover bg-center fixed inset-0 w-screen h-screen opacity-40 z-[-1]">    
        </div>
        <Header/>
        <Home showNextText={showText} onTypewriterComplete={handleTypewriterComplete}/>
        <WorkAndEducation/>        
        <Footer/>
    </div>
  );
}

export default App;