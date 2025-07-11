import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import WaitlistSection from '../components/WaitlistSection';
import FeaturesDeepDive from '../components/FeaturesDeepDive';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FeaturesDeepDive />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
