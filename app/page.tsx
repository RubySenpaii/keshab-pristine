import { BookingCta } from "@/components/booking-cta";
import { Estimator } from "@/components/estimator";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Solutions } from "@/components/solutions";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="w-full bg-surface pt-20 md:pt-24">
        <Hero />
        <Estimator />
        <Pillars />
        <Solutions />
        <Testimonials />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  );
}
