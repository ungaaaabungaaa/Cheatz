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
        Skip the drama – walk-in Drives, pay the agency for jobs, or crack a
        test <br></br> Job sorted..
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
      <div className="flex justify-center  w-full">
        <Tabs
          defaultValue="Today"
          className="bg-transparent lg:max-w-4xl w-full"
        >
          <TabsList className="w-auto lg:w-3/4 justify-start mb-8">
            <TabsTrigger value="Today">Today</TabsTrigger>
            <TabsTrigger value="Tommorw">Tommorw</TabsTrigger>
            <TabsTrigger value="ThisWeek">This Week</TabsTrigger>
            <TabsTrigger value="ThisMonth">This Month</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="Today">
            <div className="text-start w-full border-none h-auto py-1">
              <h1 className="text-2xl font-bold">Walk in Drives.</h1>
              <p className="text-md">
                Resume ready macha, straight walk-in da — drive scene lit!
              </p>
            </div>
          </TabsContent>

          <TabsContent className="w-full" value="Tommorw">
            <div className="text-start w-full border-none h-auto py-1">
              <h1 className="text-2xl font-bold">Tommorw Walk in Drives.</h1>
              <p className="text-md">
                Tomorrow mass entry da — gear up your CV, don’t come late!
              </p>
            </div>
          </TabsContent>

          <TabsContent className="w-full" value="ThisWeek">
            <div className="text-start w-full border-none h-auto py-1">
              <h1 className="text-2xl font-bold">This Week Walk in Drives.</h1>
              <p className="text-md">
                Full week scene strong, screenshot podu macha, be on track!
              </p>
            </div>
          </TabsContent>

          <TabsContent className="w-full" value="ThisMonth">
            <div className="text-start w-full border-none h-auto py-1">
              <h1 className="text-2xl font-bold">
                Whole Month Just Walkin Drives.
              </h1>
              <p className="text-md">
                Month-long thiruvizha da — CV ku local flavor kuduthu stand out
                panra!
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
