import image_838070fd30b746caa2ce6e992e2afe155f765b72 from 'figma:asset/838070fd30b746caa2ce6e992e2afe155f765b72.png';
import image_dfae428b9fa85b1b0423b3011769552602e94fef from 'figma:asset/dfae428b9fa85b1b0423b3011769552602e94fef.png';
import image_d61dbb9248629c7cd6ea759e0c4f1af30b1cf253 from 'figma:asset/d61dbb9248629c7cd6ea759e0c4f1af30b1cf253.png';
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Organizations } from "./components/Organizations";
import { About } from "./components/About";
import { ValueProps } from "./components/ValueProps";
import { Governance } from "./components/Governance";
import { Timeline } from "./components/Timeline";
import { Speakers } from "./components/Speakers";
import { Pricing } from "./components/Pricing";
import { Location } from "./components/Location";
import { CTASection } from "./components/CTASection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  const heroImage =
    "https://images.unsplash.com/photo-1745332369331-f96257ef3551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5lbGElMjBSaW8lMjBHcmFuZGUlMjBkbyUyMFN1bCUyMEJyYXppbHxlbnwxfHx8fDE3Njg5NjUxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const locationImage =
    "https://images.unsplash.com/photo-1667325418174-82ca2d6f6583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5lbGElMjBCcmF6aWwlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY3OTU5MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080";
  const cityImage = 
    "https://images.unsplash.com/photo-1560455682-fff837d61f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5lbGElMjBCcmF6aWwlMjBjaXR5fGVufDF8fHx8MTc2ODgzMjg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const airportImage = 
    image_838070fd30b746caa2ce6e992e2afe155f765b72;
  const hotelImages = {
    interior:
      image_d61dbb9248629c7cd6ea759e0c4f1af30b1cf253,
    conference:
      image_dfae428b9fa85b1b0423b3011769552602e94fef,
    lobby:
      "https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG90ZWwlMjBsb2JieXxlbnwxfHx8fDE3NjgwMjU5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero heroImage={heroImage} />
      <Organizations />
      <About />
      <ValueProps />
      <Governance />
      <Timeline />
      <Speakers />
      <Pricing />
      <Location
        locationImage={locationImage}
        cityImage={cityImage}
        airportImage={airportImage}
        hotelImages={hotelImages}
      />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}