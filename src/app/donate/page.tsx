import { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { DonationForm } from "@/components/donation-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Secure Donation | Help Us Change Lives",
  description: "Securely donate to HopeBridge. Choose from various impactful campaigns like Clean Water and Education to make a real difference today.",
  keywords: ["secure donation", "charity checkout", "donate now", "HopeBridge donation"],
};

export default function DonatePage() {
  return (
    <div className="pt-20 min-h-screen bg-muted/20">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-premium z-0" />
      
      <SectionWrapper className="relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <DonationForm />
        </div>
      </SectionWrapper>
    </div>
  );
}
