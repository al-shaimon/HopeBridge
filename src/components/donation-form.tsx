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
    <div className="bg-card dark:bg-card/80 border border-border/50 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-2xl mx-auto relative overflow-hidden backdrop-blur-xl">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-premium" />
      
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6 shadow-inner rotate-3">
          <Heart className="w-10 h-10 fill-current" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight text-foreground">Make an Impact</h2>
        <p className="text-muted-foreground text-lg">Your support creates real change.</p>
      </div>

      <form onSubmit={handleDonate} className="space-y-10">
        {/* Campaign Selection */}
        <div className="space-y-4">
          <Label className="text-lg font-bold flex items-center gap-2 text-foreground">
            Choose Your Cause
          </Label>
          <div className="relative group">
            <select 
              value={campaignId}
              onChange={(e) => setCampaignId(e.target.value)}
              className="w-full h-14 px-5 rounded-2xl border-2 border-border/60 bg-background text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none cursor-pointer font-medium"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/xml' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.2rem center', backgroundSize: '1.2em' }}
            >
              <option value="general">Global Greatest Need</option>
              {campaigns.map(c => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="space-y-5">
          <Label className="text-lg font-bold flex items-center gap-2 text-foreground">
            Contribution Amount (USD)
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {predefinedAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={cn(
                  "relative h-16 rounded-2xl border-2 transition-all font-bold text-lg flex items-center justify-center overflow-hidden",
                  amount === preset
                    ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                    : "border-border/60 bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {preset === "custom" ? "Custom" : `$${preset}`}
                {amount === preset && (
                  <motion.div 
                    layoutId="activeAmount"
                    className="absolute inset-0 bg-primary -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {amount === "custom" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="pt-2"
            >
              <div className="relative group">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground font-black text-2xl group-focus-within:text-primary transition-colors">$</span>
                <Input
                  type="number"
                  min="1"
                  step="1"
                  required
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="pl-12 h-16 text-2xl rounded-2xl border-2 border-border/60 focus:border-primary bg-background font-black tracking-tight transition-all text-foreground"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Personal Details */}
        <div className="space-y-6 pt-8 border-t border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs font-black text-muted-foreground tracking-widest uppercase ml-1">First Name</Label>
              <Input id="firstName" placeholder="John" required className="h-14 rounded-xl bg-background border-border/60 text-foreground font-medium focus:ring-4 focus:ring-primary/10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs font-black text-muted-foreground tracking-widest uppercase ml-1">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required className="h-14 rounded-xl bg-background border-border/60 text-foreground font-medium focus:ring-4 focus:ring-primary/10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-black text-muted-foreground tracking-widest uppercase ml-1">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" required className="h-14 rounded-xl bg-background border-border/60 text-foreground font-medium focus:ring-4 focus:ring-primary/10" />
          </div>
        </div>

        <div className="pt-8">
          <Button 
            type="submit" 
            className="w-full h-18 text-xl font-black rounded-2xl shadow-[0_15px_30px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.4)] transition-all hover:translate-y-[-2px] active:translate-y-[1px] uppercase tracking-widest group"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <span className="w-6 h-6 border-3 border-primary-foreground border-t-transparent animate-spin rounded-full" />
                Processing
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Continue to Payment
                <Check className="w-6 h-6 group-hover:scale-125 transition-transform" />
              </span>
            )}
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-muted-foreground/60 text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary/60" />
              <span>Stripe Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary/60" />
              <span>PCI Compliant</span>
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
