import { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "About Us | HopeBridge",
  description: "Learn about HopeBridge, our mission, and the impact we're making globally.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-gradient-premium text-white py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            We believe that small acts of kindness, when multiplied by millions of people, can transform the world.
          </p>
        </div>
      </div>

      <SectionWrapper className="bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">The HopeBridge Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2024, HopeBridge was created with a simple yet powerful idea: to connect compassionate individuals directly with the causes that matter most. We noticed a growing disconnect between donors and the impact of their contributions. Our platform bridges that gap, ensuring radical transparency and direct funding.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Every campaign on HopeBridge is rigorously vetted. We work directly with local organizers on the ground to ensure that 100% of the funds raised go directly towards the stated goals. Whether it's building a school, providing clean water, or funding emergency medical relief, we provide the tools to make it happen.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
              {[
                { title: "Transparency", desc: "Clear reporting on exactly how and where every dollar is spent." },
                { title: "Empowerment", desc: "Giving local leaders the resources they need to uplift their communities." },
                { title: "Innovation", desc: "Using modern technology to make giving easier, faster, and more secure." },
                { title: "Compassion", desc: "Driven by a deep care for humanity and the planet." }
              ].map((value, i) => (
                <div key={i} className="bg-muted/50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
