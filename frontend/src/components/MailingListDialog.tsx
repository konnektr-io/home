import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { trackWaitingListSubmit } from "../utils/analytics.js";

interface MailingListDialogProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  successMessage?: string;
  product?: string;
  endpoint?: string;
}

export function MailingListDialog({
  trigger,
  title,
  description,
  ctaText = "Submit",
  successMessage = "Thank you! We'll be in touch soon.",
  product,
  endpoint = "/api/waitinglist",
}: MailingListDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product }),
      });
      if (!res.ok) throw new Error("Failed to submit. Please try again.");
      setSuccess(true);

      // Track successful waiting list submission
      if (product) {
        trackWaitingListSubmit(product);
      }
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      setEmail("");
      setSuccess(false);
      setError(null);
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {success ? (
          <div className="py-6 text-center text-brand-teal font-semibold">
            {successMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="mailing-list-email" className="sr-only">
              Email address
            </label>
            <input
              id="mailing-list-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md border border-brand-teal/30 bg-brand-dark text-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal"
              disabled={loading}
              aria-label="Email address for mailing list"
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <DialogFooter>
              <Button
                type="submit"
                disabled={loading || !email}
                className="w-full"
              >
                {loading ? "Submitting..." : ctaText}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
