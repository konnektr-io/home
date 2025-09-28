import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";
import { MailingListDialog } from "./MailingListDialog";

interface WaitingListProps {
  productName: string;
  description?: string;
}

export function WaitingListSection({
  productName,
  description,
}: WaitingListProps) {
  return (
    <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
      <div className="text-center">
        <Mail className="mx-auto h-12 w-12 text-brand-teal mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Coming Soon</h3>
        <p className="text-muted-foreground mb-6">
          {description ||
            `${productName} is currently in development. Join our waiting list to be the first to know when it's available.`}
        </p>
        <MailingListDialog
          trigger={
            <Button className="bg-brand-teal hover:bg-brand-teal/90 w-full">
              Join Waiting List <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          }
          title={`Join the ${productName} Waiting List`}
          description={
            description || `Be the first to know when ${productName} launches.`
          }
          ctaText="Join List"
          product={productName}
          successMessage={`You're on the list! We'll notify you as soon as ${productName} is available.`}
        />
      </div>
    </Card>
  );
}
