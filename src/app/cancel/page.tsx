import { Metadata } from "next";
import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Payment Cancelled | HopeBridge",
};

export default function CancelPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
      <div className="max-w-md w-full px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-destructive/10 p-4">
            <XCircle className="w-16 h-16 text-destructive" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Your donation process was cancelled. If you experienced any issues or have questions, please don't hesitate to reach out to our support team.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/donate">
            <Button className="w-full h-12 text-lg">Try Again</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full h-12 text-lg">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
