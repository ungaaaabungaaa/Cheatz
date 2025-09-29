import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  party: defineTable({
    phoneNumber: v.string(),
    createdAt: v.number(),
  }),
});
