import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationSection from "@/components/DestinationSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AirlineSection from "@/components/AirlineSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section>
      <NavBar/>
      <HeroSection/>
      <ServicesSection/>
      <DestinationSection/>
      <BookingSection/>
      <TestimonialsSection/>
      <AirlineSection/>
      <SubscriptionSection/>
      <Footer/>
    </section>
  );
}
