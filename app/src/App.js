import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Carousel from './components/Carousel'
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div>
        <div className="bg-custom-background bg-no-repeat bg-cover bg-center fixed inset-0 w-screen h-screen opacity-40 z-[-1]">    
        </div>
      <Header/>
      <Carousel/>      
      <Footer/>
    </div>
  );
}

export default App;