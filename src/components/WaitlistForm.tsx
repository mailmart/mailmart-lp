import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already on the waitlist 😅",
            description: "This email has already been submitted.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "You're on the waitlist! 🎉",
          description: "We'll notify you when MailMart launches.",
        });
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Unexpected error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
    >
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button
        type="submit"
        variant="hero"
        size="lg"
        disabled={isLoading}
        className="whitespace-nowrap"
      >
        {isLoading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};
