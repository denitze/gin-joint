import './App.css';
import About from './components/About';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';
import Header from './components/Header';
import Instagram from './components/Instagram';
import Jazz from './components/Jazz';
import Nav from './components/Nav';

function App() {
  return (
    <main>
        <Header />
        <About />
        <Jazz />
        <FoodMenu />
        <Instagram />
        <Nav />
        <Footer/>
    </main>
  );
}

export default App;
