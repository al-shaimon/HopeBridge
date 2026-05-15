import { Metadata } from "next";
import { campaigns } from "@/data/mock";
import { CampaignCard } from "@/components/campaign-card";
import { SectionWrapper } from "@/components/section-wrapper";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Campaigns | HopeBridge",
  description: "Browse our active donation campaigns and make a difference today.",
};

export default function CampaignsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-muted/30 py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Campaigns</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore ongoing projects and find the perfect cause that resonates with your heart.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search for campaigns, categories, or keywords..." 
              className="pl-12 h-14 rounded-full bg-background border-border/50 shadow-sm text-base"
            />
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            {["All", "Clean Water", "Education", "Healthcare", "Environment"].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
