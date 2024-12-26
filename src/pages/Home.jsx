import AboutSection from "../sections/AboutSection"
import Contact from "../sections/Contact"
import Features from "../sections/Features"
import Hero from "../sections/Hero"
import Pricing from "../sections/Pricing"
import Testimonials from "../sections/Testimonials "

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutSection/>
            <Features/>
            <Testimonials/>
            <Pricing/>
            <Contact/>
        </div>
    )
}

export default Home