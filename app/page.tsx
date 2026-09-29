'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClassSchedule from '@/components/ClassSchedule';
import BmiCalculator from '@/components/BmiCalculator';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import OpeningHoursSection from '@/components/OpeningHoursSection';
import LocationContactSection from '@/components/LocationContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import VipPassModal from '@/components/VipPassModal';

export default function HomePage() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedServiceForPass, setSelectedServiceForPass] = useState<string>('HIIT Exercise Classes');

  const handleOpenPassModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForPass(serviceName);
    }
    setIsPassModalOpen(true);
  };

  const handleClosePassModal = () => {
    setIsPassModalOpen(false);
  };

  const handleSelectService = (serviceName: string) => {
    handleOpenPassModal(serviceName);
  };

  const handleBookClass = (className: string) => {
    handleOpenPassModal(className);
  };

  return (
    <main className="min-h-screen bg-[#0B0C10] text-[#F3F4F6] relative selection:bg-[#FF5E00] selection:text-white">
      {/* 1-Row 3-Zone Navigation Header */}
      <Navbar onOpenPassModal={() => handleOpenPassModal()} />

      {/* Full-width 4-Slide Motivational Hero Carousel */}
      <HeroCarousel onOpenPassModal={() => handleOpenPassModal()} />

      {/* About Section */}
      <AboutSection onOpenPassModal={() => handleOpenPassModal()} />

      {/* 5 Targeted Services (HIIT, Aerobics, CrossFit, Personal Training, Weight Training) */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Why Choose Us Pillars */}
      <WhyChooseUs />

      {/* Interactive Class Timetable */}
      <ClassSchedule onBookClass={handleBookClass} />

      {/* Interactive BMI Calculator & Personalized Recommendation */}
      <BmiCalculator onOpenPassModalWithProgram={handleOpenPassModal} />

      {/* Responsive Filterable Photo Gallery with Lightbox */}
      <GallerySection />

      {/* Google Reviews (4.8 ★ / 189 Athletes) */}
      <ReviewsSection />

      {/* Opening Hours with Live IST Status */}
      <OpeningHoursSection />

      {/* Exact Location & Contact Lead Form */}
      <LocationContactSection />

      {/* High-Impact Final Conversion CTA */}
      <FinalCTA onOpenPassModal={() => handleOpenPassModal()} />

      {/* Complete Footer */}
      <Footer onOpenPassModal={() => handleOpenPassModal()} />

      {/* Real WhatsApp and Call Bottom-Right Floating Buttons */}
      <FloatingContactButtons />

      {/* Free 1-Day VIP Pass Claim Modal */}
      <VipPassModal
        isOpen={isPassModalOpen}
        onClose={handleClosePassModal}
        initialService={selectedServiceForPass}
      />
    </main>
  );
}
