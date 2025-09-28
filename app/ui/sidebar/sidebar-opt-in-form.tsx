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

export function SidebarOptInForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setPhoneNumber(value);
    setIsValid(value.length === 10);
  };

  const submit = () => {
    console.log("Phone number submitted:", phoneNumber);
    setIsSubmitted(true);
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
            />
            <Button
              className="bg-sidebar-primary text-sidebar-primary-foreground w-full shadow-none"
              size="sm"
              type="submit"
              disabled={!isValid}
            >
              {isValid ? "Thanks bro!" : "Macha Phone Number ?"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
