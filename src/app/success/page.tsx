import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Payment Successful | HopeBridge",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
      <div className="max-w-md w-full px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-500/10 p-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Your generous donation has been successfully processed. An email receipt has been sent to you. Together, we are making a massive impact.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/campaigns">
            <Button className="w-full h-12 text-lg">Explore More Campaigns</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full h-12 text-lg">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
