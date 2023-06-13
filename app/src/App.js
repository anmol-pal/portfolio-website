import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills';
import 'tailwindcss/tailwind.css';

function App() {

  return (
    <div className='flex flex-col h-screen'>
        <div className="bg-custom-background bg-no-repeat bg-cover bg-center fixed inset-0 w-screen h-screen opacity-40 z-[-1]">    
        </div>
        <Header/>
        <Home/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;