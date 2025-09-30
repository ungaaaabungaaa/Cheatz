import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const addPartyMember = mutation({
  args: {
    phoneNumber: v.string(),
  },
  handler: async (ctx, args) => {
    const { phoneNumber } = args;
    
    // Validate phone number (should be 10 digits)
    if (!/^\d{10}$/.test(phoneNumber)) {
      throw new Error("Phone number must be exactly 10 digits");
    }
    
    // Check if phone number already exists
    const existingMember = await ctx.db
      .query("party")
      .filter((q) => q.eq(q.field("phoneNumber"), phoneNumber))
      .first();
    
    if (existingMember) {
      throw new Error("Already registered");
    }
    
    // Insert new party member
    const partyMemberId = await ctx.db.insert("party", {
      phoneNumber,
      createdAt: Date.now(),
    });
    
    return partyMemberId;
  },
});
