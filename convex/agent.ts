import { components } from "./_generated/api";
import { Agent } from "@convex-dev/agent";
import { openai } from "@ai-sdk/openai";
import { tool } from "ai";
import { z } from "zod";

// Simple mock weather tool using AI SDK format
const getWeather = tool({
  description: "Get current weather for a location",
  parameters: z.object({
    location: z.string().describe("The city and state, e.g. San Francisco, CA"),
  }),
  execute: async ({ location }) => {
    // Mock weather data - in a real app, you'd call a weather API
    const mockWeatherData = {
      location,
      temperature: Math.floor(Math.random() * 30) + 10, // Random temp between 10-40°C
      condition: ["sunny", "cloudy", "rainy", "partly cloudy"][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 40) + 30, // Random humidity 30-70%
    };
    
    return `Current weather in ${location}: ${mockWeatherData.temperature}°C, ${mockWeatherData.condition}, humidity ${mockWeatherData.humidity}%`;
  },
});

// Simple mock geocoding tool using AI SDK format
const getGeocoding = tool({
  description: "Get coordinates for a location",
  parameters: z.object({
    location: z.string().describe("The city and state, e.g. San Francisco, CA"),
  }),
  execute: async ({ location }) => {
    // Mock geocoding data - in a real app, you'd call a geocoding API
    const mockCoordinates = {
      lat: (Math.random() * 180 - 90).toFixed(4), // Random latitude
      lng: (Math.random() * 360 - 180).toFixed(4), // Random longitude
    };
    
    return `Coordinates for ${location}: ${mockCoordinates.lat}, ${mockCoordinates.lng}`;
  },
});

// Create the agent
export const agent = new Agent(components.agent, {
  name: "Weather Forecaster",
  languageModel: openai.chat("gpt-4o-mini"),
  instructions: "You are a helpful weather forecaster. Use the available tools to provide weather information and location details when asked.",
  tools: { getWeather, getGeocoding },
  maxSteps: 3,
});

