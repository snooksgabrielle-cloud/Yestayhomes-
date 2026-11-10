import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider.tsx';
import { PropertyAreaSelector } from '../components/home/PropertyAreaSelector.tsx';
import { FeaturedAreas } from '../components/home/FeaturedAreas.tsx';
import { CompanyIntro } from '../components/home/CompanyIntro.tsx';
import { ServiceHighlights } from '../components/home/ServiceHighlights.tsx';
import { SuburbSections } from '../components/home/SuburbSections.tsx';
import { SafetyCleaningSection } from '../components/home/SafetyCleaningSection.tsx';
import { FeaturedPropertiesCarousel } from '../components/home/FeaturedPropertiesCarousel.tsx';
import { SummerEscapes } from '../components/home/SummerEscapes.tsx';
import { CarLeasingBanner } from '../components/home/CarLeasingBanner.tsx';
import { ServicesAndSupport } from '../components/home/ServicesAndSupport.tsx';
import { PropertyRenovationCTA } from '../components/home/PropertyRenovationCTA.tsx';
import { ContactCTA } from '../components/home/ContactCTA.tsx';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-neutral-950">
      <HeroSlider />
      <PropertyAreaSelector />
      <FeaturedAreas />
      <CompanyIntro />
      <ServiceHighlights />
      <SuburbSections />
      <SafetyCleaningSection />
      <FeaturedPropertiesCarousel />
      <SummerEscapes />
      <CarLeasingBanner />
      <ServicesAndSupport />
      <PropertyRenovationCTA />
      <ContactCTA />
    </div>
  );
}
