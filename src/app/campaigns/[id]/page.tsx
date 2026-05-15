import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { campaigns } from "@/data/mock";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Calendar, User, Users, Target, Heart } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const campaign = campaigns.find((c) => c.id === resolvedParams.id);
  if (!campaign) return { title: "Not Found" };
  return {
    title: `${campaign.title} | HopeBridge`,
    description: campaign.description,
  };
}

export default async function CampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const campaign = campaigns.find((c) => c.id === resolvedParams.id);

  if (!campaign) {
    notFound();
  }

  const percentage = Math.min(
    Math.round((campaign.raisedAmount / campaign.goalAmount) * 100),
    100
  );

  const predefinedAmounts = [10, 25, 50, 100];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Campaign Banner */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card glass rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {campaign.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{campaign.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground text-sm mb-8 border-b border-border pb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By {campaign.organizer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(campaign.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-2xl font-semibold mb-4">About the Campaign</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {campaign.story}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {campaign.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card rounded-2xl p-6 border border-border shadow-lg">
              <div className="mb-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    ${campaign.raisedAmount.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground mb-1">
                    raised of ${campaign.goalAmount.toLocaleString()}
                  </span>
                </div>
                <Progress value={percentage} className="h-3 mb-2 bg-muted" />
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-primary">{percentage}% Funded</span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Users className="w-4 h-4" /> {campaign.donorCount} Donors
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Select Donation Amount
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {predefinedAmounts.map((amount) => (
                    <Link key={amount} href={`/donate?campaign=${campaign.id}&amount=${amount}`} className="w-full">
                      <Button variant="outline" className="w-full text-lg h-12 hover:border-primary hover:text-primary transition-colors">
                        ${amount}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href={`/donate?campaign=${campaign.id}`} className="w-full">
                <Button className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all font-bold">
                  Donate Custom Amount
                  <Heart className="ml-2 w-5 h-5 fill-current" />
                </Button>
              </Link>

              <div className="mt-6 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Target className="w-4 h-4" />
                <span>All donations are securely processed via Stripe.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
