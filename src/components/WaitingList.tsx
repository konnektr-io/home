import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";

interface WaitingListProps {
  productName: string;
  description?: string;
}

export function WaitingListSection({
  productName,
  description,
}: WaitingListProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual waiting list signup
    console.log(`Waiting list signup for ${productName}:`, email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="p-8 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 border-brand-teal/20">
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-brand-teal mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            You're on the list!
          </h3>
          <p className="text-muted-foreground">
            Thanks for your interest in {productName}. We'll notify you as soon
            as it's available.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
      <div className="text-center">
        <Mail className="mx-auto h-12 w-12 text-brand-teal mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Coming Soon</h3>
        <p className="text-muted-foreground mb-6">
          {description ||
            `${productName} is currently in development. Join our waiting list to be the first to know when it's available.`}
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            />
            <Button
              type="submit"
              className="bg-brand-teal hover:bg-brand-teal/90"
            >
              Join List <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
