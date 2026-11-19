import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { PurchaseBar } from "@/components/layout/PurchaseBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Contact } from "@/components/sections/Contact";
import { Pricing } from "@/components/sections/Pricing";
import { RootCause } from "@/components/sections/RootCause";
import { SocialProof } from "@/components/sections/SocialProof";
import { Solution } from "@/components/sections/Solution";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main id="content" className="flex-1">
        <Hero />
        <RootCause />
        <Solution />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <PurchaseBar />
    </>
  );
}
