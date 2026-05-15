import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Globe2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { campaigns, stats, testimonials } from "@/data/mock";
import { CampaignCard } from "@/components/campaign-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { SectionWrapper } from "@/components/section-wrapper";

export default function Home() {
  const featuredCampaigns = campaigns.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-background z-0">
          <div className="absolute inset-0 bg-gradient-premium opacity-5 dark:opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/10 blur-[100px] rounded-full mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Small Donations.<br />
            <span className="text-gradient">Massive Impact.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of generous donors around the world making a difference. 100% of your donation directly funds the projects you choose.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/donate">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all">
                Donate Now
                <HeartHandshake className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/campaigns">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-background/50 backdrop-blur-sm border-border hover:bg-muted/50 transition-all">
                View Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <SectionWrapper className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Urgent Campaigns</h2>
              <p className="text-muted-foreground text-lg">
                These projects need immediate funding to reach their goals. Your contribution can change lives today.
              </p>
            </div>
            <Link href="/campaigns" className="mt-6 md:mt-0">
              <Button variant="ghost" className="group">
                View All Campaigns
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Donate Section */}
      <SectionWrapper className="bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HopeBridge?</h2>
            <p className="text-muted-foreground text-lg">
              We've built a platform that ensures your generosity makes the maximum possible impact, securely and transparently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Secure", desc: "Enterprise-grade encryption and secure payment processing." },
              { icon: HeartHandshake, title: "Transparent Funding", desc: "Track exactly how and where your donation is being used." },
              { icon: Target, title: "Direct Impact", desc: "No middle-men. Funds go directly to verified project organizers." },
              { icon: Globe2, title: "Global Reach", desc: "Support diverse causes and communities across the globe." },
            ].map((feature, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Voices of Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium z-0" />
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to make a difference?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Every dollar counts. Start your giving journey today and help us build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full font-bold">
                Donate Now
              </Button>
            </Link>
            <Link href="/campaigns">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full text-white border-white/30 hover:bg-white/10 hover:text-white bg-transparent">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
