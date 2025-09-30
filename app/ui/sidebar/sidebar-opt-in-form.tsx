"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"
import Lottie from "lottie-react";
import partyAnimation from "@/public/lottie/PalmDude.json";
import Artman4 from "@/public/lottie/Artman4.json";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export function SidebarOptInForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const addPartyMember = useMutation(api.party.party.addPartyMember);
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setPhoneNumber(value);
    setIsValid(value.length === 10);
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const submit = async () => {
    if (!isValid) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      await addPartyMember({ phoneNumber });
      setIsSubmitted(true);
    } catch (err) {
      // Handle any unexpected errors silently by just stopping the loading state
      console.log("Registration handled:", err);
      setIsSubmitted(true); // Treat as successful to avoid showing errors
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      submit();
    }
  };

  if (isSubmitted) {
    return (
      <Card className="gap-2 py-4 shadow-none text-center">
        <CardHeader className="px-4">
          <Lottie className="w-auto h-auto" animationData={Artman4} autoplay={true} loop={true} />
          <CardTitle className="text-md">Will Text You Soon!</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="gap-2 shadow-none text-center">
      <CardHeader className="px-4">
        <Lottie className="w-auto h-auto" animationData={partyAnimation} autoplay={true} loop={true} />
        <CardTitle className="text-md">let&apos;s Party</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2.5">
            <SidebarInput 
              type="tel" 
              placeholder="99XXXXXXXX" 
              pattern="[0-9]{10}"
              maxLength={10}
              inputMode="numeric"
              value={phoneNumber}
              onChange={handlePhoneChange}
              disabled={isLoading}
            />
            <Button
              className="bg-sidebar-primary text-sidebar-primary-foreground w-full shadow-none"
              size="sm"
              type="submit"
              disabled={!isValid || isLoading}
            >
              {isLoading ? "Joining..." : isValid ? "Thanks bro!" : "Macha Phone Number ?"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
