import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/sections/HeroSection";
import BrandSection from "../components/sections/BrandSection";
import JourneySection from "../components/sections/JourneySection";
import PackagesSection from "../components/sections/PackagesSection";
import MenuBuilderSection from "../components/sections/MenuBuilderSection";
import CulinarySection from "../components/sections/CulinarySection";
import ServiceSection from "../components/sections/ServiceSection";
import VenueSection from "../components/sections/VenueSection";
import RealWeddingsSection from "../components/sections/RealWeddingsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import TransparencySection from "../components/sections/TransparencySection";
import QuoteBuilderSection from "../components/sections/QuoteBuilderSection";
import FinalSection from "../components/sections/FinalSection";

export default function WeddingPage() {
  return (
    <MainLayout>
      <HeroSection />
      <BrandSection />
      <JourneySection />
      <PackagesSection />
      <MenuBuilderSection />
      <CulinarySection />
      <ServiceSection />
      <VenueSection />
      <RealWeddingsSection />
      <TestimonialSection />
      <TransparencySection />
      <QuoteBuilderSection />
      <FinalSection />
    </MainLayout>
  );
}
