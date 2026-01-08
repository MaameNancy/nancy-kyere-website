'use client';

import IntroOverlay from '../src/components/IntroOverlay';
import Hero from '../src/components/Hero';
import TransformationMarquee from '@/components/TransformationMarquee';
import About from '../src/components/About';
import CorePillars from '@/components/CorePillars';
import TestimonialsSection from '../src/components/WhyListenSection';
import ServicesSection from '../src/components/CommunitySection';
import EmailSignup from '../src/components/StayConnected';
import WhatsAppFloat from '../src/components/WhatsAppFloat';

export default function Page() {
  return (
    <div className="relative bg-white">
      {/* 1. The Intro Splash */}
      <IntroOverlay />

      {/* 2. THE HERO */}
      <Hero />

      {/* 3. THE TRANSITION (The Marquee goes here) */}
      <TransformationMarquee />

      {/* 4. THE NARRATIVE */}
      <About />

      {/* 5. THE METHODOLOGY */}
      <CorePillars />
      
      {/* 6. WHY LISTEN TO ME */}
      <TestimonialsSection />

      {/* 7. COMMUNITY */}
      <ServicesSection />
      
      {/* 8. STAY CONNECTED */}
      <EmailSignup />

      {/* REMOVE THIS LINE TOO */}
      {/* <RoadmapCTA /> */}

      

      {/* 9. GLOBAL ELEMENTS */}
      <WhatsAppFloat />
    </div>
  );
}