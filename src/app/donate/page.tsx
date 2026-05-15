import { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { DonationForm } from "@/components/donation-form";
import { Heart, ShieldCheck, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Secure Donation | Help Us Change Lives",
  description: "Securely donate to HopeBridge. Choose from various impactful campaigns like Clean Water and Education to make a real difference today.",
  keywords: ["secure donation", "charity checkout", "donate now", "HopeBridge donation"],
};

export default function DonatePage() {
  return (
    <div className="pt-20 min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-premium/10 dark:bg-gradient-premium/5 z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full z-0" />

      <SectionWrapper className="relative z-10 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Side: Emotional Content */}
            <div className="space-y-8 hidden lg:block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>Join 10,000+ Global Donors</span>
              </div>
              
              <h1 className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.1]">
                Your Kindness <br />
                <span className="text-gradient">Changes Everything.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                100% of your donation goes directly to the field. We handle the logistics, you provide the hope.
              </p>

              <div className="grid grid-cols-1 gap-6 pt-4">
                {[
                  { icon: ShieldCheck, title: "Secure & Encrypted", desc: "Enterprise-grade security for your peace of mind." },
                  { icon: Globe, title: "Global Transparency", desc: "Real-time updates on your donation's impact." },
                  { icon: Heart, title: "Direct Support", desc: "No middle-men. Straight to those who need it." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="w-full">
              <div className="lg:hidden text-center mb-10 space-y-4">
                <h1 className="text-4xl font-black tracking-tight">
                  Your Kindness <span className="text-gradient">Changes Lives</span>
                </h1>
                <p className="text-muted-foreground">Join our global mission today.</p>
              </div>
              <DonationForm />
            </div>

          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
