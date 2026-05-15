import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-9xl font-extrabold text-primary/20 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button size="lg" className="h-12 px-8 text-lg rounded-full">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
