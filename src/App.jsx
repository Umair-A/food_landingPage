import './App.css'
import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Testimonials from './sections/Testimonials';
import Works from './sections/Works';

function App() {
  return (
    <main className='relative'>
      <Navbar />
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section className='mt-28'>
        <Works />
      </section>
      <section className='mt-28'>
        <Testimonials />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App;
