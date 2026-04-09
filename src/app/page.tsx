import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/home/Hero"));
const Stats = dynamic(() => import("../components/home/Stats"));
const HowItWorks = dynamic(() => import("../components/home/HowItWorks"));
const WhyChooseUs = dynamic(() => import("../components/home/WhyChooseUs"));
const GlobalPresence = dynamic(() => import("../components/home/GlobalPresence"));
const FeaturedCourses = dynamic(() => import("../components/home/FeaturedCourses"));
const LearningJourney = dynamic(() => import("../components/home/LearningJourney"));
const HeadTeacher = dynamic(() => import("../components/home/HeadTeacher"));
const Testimonials = dynamic(() => import("../components/home/Testimonials"));
const MembershipPreview = dynamic(() => import("../components/home/MembershipPreview"));
const FAQ = dynamic(() => import("../components/home/FAQ"));
const CTA = dynamic(() => import("../components/home/CTA"));

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <Hero />

      {/* Statistics Section */}
      <Stats />

      {/* How It Works — 3-step onboarding process */}
      <HowItWorks />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Global Presence — countries marquee + trust badges */}
      <GlobalPresence />

      {/* Featured Courses Section */}
      <FeaturedCourses />

      {/* Learning Journey — curriculum roadmap timeline */}
      <LearningJourney />

      {/* Head Teacher Section */}
      <HeadTeacher />

      {/* Membership/Pricing Preview Section */}
      <MembershipPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Final Call to Action before Footer */}
      <div className="bg-secondary/30 py-24">
        <CTA />
      </div>
    </div>
  );
}
