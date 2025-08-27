"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-2 lg:mb-4">No Jobs</h1>
      <p className="text-lg lg:text-2xl mb-8">Skip the drama – walk-in Drives, pay the agency for jobs, or crack a test <br></br> Job sorted..</p>
      
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
      <div className="flex justify-center  w-full">
        <Tabs defaultValue="Today" className="bg-transparent lg:max-w-4xl w-full">
          <TabsList className="w-auto lg:w-3/4 justify-start mb-8">
            <TabsTrigger value="Today">Today</TabsTrigger>
            <TabsTrigger value="Tommorw">Tommorw</TabsTrigger>
            <TabsTrigger value="ThisWeek">This Week</TabsTrigger>
            <TabsTrigger value="ThisMonth">This Month</TabsTrigger>
            <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="Today">Today Jobs List.</TabsContent>
          <TabsContent className="w-full" value="Tommorw">Tommorws jobs List.</TabsContent>
          <TabsContent className="w-full" value="ThisWeek">This Months Job List .</TabsContent>
          <TabsContent className="w-full" value="ThisMonth">This Months Job List.</TabsContent>
          <TabsContent className="w-full" value="Upcoming">Upcoming.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
