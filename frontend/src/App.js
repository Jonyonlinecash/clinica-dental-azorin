import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import SocialProof from "@/components/landing/SocialProof";
import WhyUs from "@/components/landing/WhyUs";
import Services from "@/components/landing/Services";
import Authority from "@/components/landing/Authority";
import Team from "@/components/landing/Team";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Landing = () => {
  return (
    <div className="App" data-testid="landing-page">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <SocialProof />
        <WhyUs />
        <Services />
        <Authority />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
