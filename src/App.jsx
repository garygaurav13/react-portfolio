import Navbar from './sections/navbar/navbar';
import Header from './sections/header/Header';
import About from './sections/about/about';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/faqs';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Footer from './sections/footer/footer';
import Contact from './sections/contact/contact';

const App = () => {
    return (
        <main>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <FAQs/>
            <Contact/>
            <Footer/>
            <FloatingNav/>       
        </main>
    )
}

export default App;