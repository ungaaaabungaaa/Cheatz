"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission here
    console.log("Search submitted:", searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as any);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-2 lg:mb-4">
        No Job$
      </h1>
      <p className="text-lg lg:text-2xl mb-8">
        Skip the drama – walk-in Drives, pay the agency for jobs <br></br> Job
        sorted..
      </p>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <div className="relative lg:max-w-4xl w-full">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-12 py-4 pl-12 rounded-lg shadow-md focus:outline-none  transition-all duration-200 dark:border-gray-400 dark:border-1.5"
            />
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </form>
        </div>
      </div>
      <section className="flex justify-center w-full">
        <Tabs
          defaultValue="Today"
          className="bg-transparent lg:max-w-4xl w-full"
        >
          <TabsList className="w-auto lg:w-3/4 justify-start mb-8">
            <TabsTrigger value="Today">Today</TabsTrigger>
            <TabsTrigger value="Tomorrow">Tomorrow</TabsTrigger>
            <TabsTrigger value="ThisWeek">This Week</TabsTrigger>
            <TabsTrigger value="ThisMonth">This Month</TabsTrigger>
          </TabsList>

          <TabsContent className="w-full" value="Today">
            <div className="text-start py-1">
              <h1 className="md:text-3xl text-2xl font-bold">
                Today’s Walk-in Drives
              </h1>
              <p className="text-md text-muted-foreground my-2">
                Happening now — don’t miss out!
              </p>
            </div>
          </TabsContent>

          <TabsContent className="w-full" value="Tomorrow">
            <div className="text-start py-1">
              <h1 className="md:text-3xl text-2xl font-bold">
                Tomorrow’s Walk-in Drives
              </h1>
              <p className="text-md text-muted-foreground my-2">
                Get ready — your chance is tomorrow.
              </p>
            </div>
          </TabsContent>

          <TabsContent className="w-full" value="ThisWeek">
            <div className="text-start py-1">
              <h1 className="md:text-3xl text-2xl font-bold">
                This Week’s Walk-in Drives
              </h1>
              <p className="text-md text-muted-foreground my-2">
                Plan ahead — stay on track this week.
              </p>
            </div>
          </TabsContent>

          <TabsContent className="w-full" value="ThisMonth">
            <div className="text-start py-1">
              <h1 className="md:text-3xl text-2xl font-bold">
                This Month’s Walk-in Drives
              </h1>
              <p className="text-md text-muted-foreground my-2">
                All opportunities lined up for the month.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
      </section>

      <section className="flex justify-center w-full lg:my-8 my-4">

      <Tabs
          defaultValue="agency"
          className="bg-transparent lg:max-w-4xl w-full"
        >
          <TabsList className="w-auto lg:w-3/4 justify-start mb-8 hidden">
            <TabsTrigger value="agency"></TabsTrigger>
          </TabsList>

          <TabsContent className="w-full" value="agency">
            <div className="text-start py-1">
            <h1 className="md:text-3xl text-2xl font-bold">Job Agencies</h1>
            <p className="text-md text-muted-foreground my-2">Skip the noise. These are the firms that hustle to land you work.</p>
            </div>
          </TabsContent>

       
        </Tabs>
        
      </section>
    </div>
  );
}
