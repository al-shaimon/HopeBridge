"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Lock, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { campaigns } from "@/data/mock";
import { checkoutAction } from "@/actions/stripe";
import { cn } from "@/lib/utils";

function DonationFormInner() {
  const searchParams = useSearchParams();
  const initialAmount = searchParams.get("amount") || "50";
  const initialCampaign = searchParams.get("campaign") || "general";

  const [amount, setAmount] = useState<string>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [campaignId, setCampaignId] = useState<string>(initialCampaign);
  const [loading, setLoading] = useState(false);

  const predefinedAmounts = ["10", "25", "50", "100", "500", "custom"];

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const finalAmount = amount === "custom" ? customAmount : amount;
    const finalAmountNum = parseFloat(finalAmount);

    if (isNaN(finalAmountNum) || finalAmountNum <= 0) {
      alert("Please enter a valid amount.");
      setLoading(false);
      return;
    }

    try {
      const selectedCampaign = campaigns.find(c => c.id === campaignId);
      const campaignName = selectedCampaign ? selectedCampaign.title : "General Donation";

      const url = await checkoutAction({
        amount: finalAmountNum,
        campaignName,
      });

      if (url) {
        window.location.href = url;
      } else {
        alert("Payment integration is currently running in mock mode because Stripe keys are missing.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during checkout.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-2xl max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-premium" />
      
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 shadow-inner">
          <Heart className="w-10 h-10 fill-current" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Make a Donation</h2>
        <p className="text-muted-foreground text-lg">Your generosity has the power to change lives.</p>
      </div>

      <form onSubmit={handleDonate} className="space-y-10">
        {/* Campaign Selection */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">1</span>
            Select Campaign
          </Label>
          <select 
            value={campaignId}
            onChange={(e) => setCampaignId(e.target.value)}
            className="w-full h-14 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em' }}
          >
            <option value="general">Area of Greatest Need (General Fund)</option>
            {campaigns.map(c => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>

        {/* Amount Selection */}
        <div className="space-y-5">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">2</span>
            Donation Amount (USD)
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {predefinedAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={cn(
                  "relative h-16 rounded-2xl border-2 transition-all font-bold text-lg flex items-center justify-center overflow-hidden",
                  amount === preset
                    ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border-border bg-background text-foreground hover:border-primary/40 hover:bg-muted/30"
                )}
              >
                {preset === "custom" ? "Custom" : `$${preset}`}
                {amount === preset && (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="absolute top-1 right-1 bg-primary-foreground text-primary rounded-full p-0.5"
                  >
                    <Check className="w-3 h-3" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>
          
          {amount === "custom" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-2"
            >
              <div className="relative group">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-xl group-focus-within:text-primary transition-colors">$</span>
                <Input
                  type="number"
                  min="1"
                  step="1"
                  required
                  placeholder="0.00"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="pl-10 h-16 text-xl rounded-2xl border-2 border-border focus:border-primary bg-background font-bold tracking-tight transition-all"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Personal Details */}
        <div className="space-y-6 pt-6 border-t border-border/50">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">3</span>
            Donor Details
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-bold text-muted-foreground ml-1">FIRST NAME</Label>
              <Input id="firstName" placeholder="John" required className="h-14 rounded-xl bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-bold text-muted-foreground ml-1">LAST NAME</Label>
              <Input id="lastName" placeholder="Doe" required className="h-14 rounded-xl bg-background border-border" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-bold text-muted-foreground ml-1">EMAIL ADDRESS</Label>
            <Input id="email" type="email" placeholder="john@example.com" required className="h-14 rounded-xl bg-background border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-bold text-muted-foreground ml-1">MESSAGE (OPTIONAL)</Label>
            <Textarea id="message" placeholder="A message of support..." className="resize-none rounded-xl min-h-[100px] bg-background border-border" />
          </div>
        </div>

        <div className="pt-8">
          <Button 
            type="submit" 
            className="w-full h-16 text-xl font-black rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.99] uppercase tracking-widest"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent animate-spin rounded-full" />
                Processing...
              </span>
            ) : `Complete Donation`}
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-6 border-t border-border/30 text-muted-foreground text-sm">
            <div className="flex items-center gap-2 font-medium">
              <Lock className="w-4 h-4 text-primary" />
              <span>Secure Checkout</span>
            </div>
            <div className="hidden sm:block text-border">|</div>
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Encrypted Data</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export function DonationForm() {
  return (
    <Suspense fallback={<div className="h-[600px] flex items-center justify-center"><div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full" /></div>}>
      <DonationFormInner />
    </Suspense>
  );
}
