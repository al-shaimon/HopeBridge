"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Campaign } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const percentage = Math.min(
    Math.round((campaign.raisedAmount / campaign.goalAmount) * 100),
    100
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full pt-0 overflow-hidden flex flex-col bg-card/50 glass border-border/50 group">
        <div className="relative h-48 overflow-hidden">
          {/* We use standard img to avoid next/image host config issues in templates, 
              but typically we'd configure next/image in next.config.ts */}
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
              {campaign.category}
            </span>
          </div>
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          <Link href={`/campaigns/${campaign.id}`} className="group-hover:text-primary transition-colors">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{campaign.title}</h3>
          </Link>
          <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
            {campaign.description}
          </p>

          <div className="space-y-4 mt-auto">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-semibold">${campaign.raisedAmount.toLocaleString()}</span>
                <span className="text-muted-foreground">raised of ${campaign.goalAmount.toLocaleString()}</span>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground font-medium">
              <span>{percentage}% Funded</span>
              <span>{campaign.donorCount} Donors</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 mt-auto">
          <Link href={`/donate?campaign=${campaign.id}`} className="w-full">
            <Button className="w-full rounded-lg shadow-md group-hover:shadow-primary/25 transition-all">
              Donate Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
