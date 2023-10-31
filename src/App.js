import { Cards, Contact, Courses, Facts, Features, Footer, Hero, NewsLetter, Pricing } from "./sections";
import Aos from "aos";
import 'aos/dist/aos.css'
function App() {

  Aos.init({
    duration: 1000,
    offset: 100,
  })

  return (
    <div className="overflow-hidden">
    <Hero />
    <Cards />
    <Facts />
    <Features />
    <Courses />
    <Pricing />
    <NewsLetter />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
