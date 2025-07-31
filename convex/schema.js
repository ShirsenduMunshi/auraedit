import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        tokenIdentifier: v.string(),
        imageUrl: v.optional(v.string()),

        plan: v.optional(v.union(v.literal("free"), v.literal("pro"))), // e.g., "free", "pro", "enterprise"
        projectUsed: v.optional(v.number()), // e.g., 5 current projects
        ExportsThisMonth: v.optional(v.number()), // e.g., 10 total projects allowed

        createdAt: v.number(),
        lastActivityAt: v.optional(v.number()), // Timestamp of last activity
    }).index("by_token", ["tokenIdentifier"]),

    projects: defineTable({
        title: v.string(),
        userId: v.id("users"),

        canvasState: v.any(), // JSON string of the canvas state
        width: v.number(), // Width of the canvas
        height: v.number(), // Height of the canvas

        originalImageUrl: v.optional(v.string()), // URL of the original image if uploaded currently.
        currentImageUrl: v.optional(v.string()), // URL of the current image if uploaded currently.
        thumbnailUrl: v.optional(v.string()), // URL of the thumbnail image

        activeTransformation: v.optional(v.any()), // JSON string of the active transformation state
        backgroundRemoved: v.optional(v.boolean()), // Whether the background has been removed

        folderId: v.optional(v.id("folders")), // Optional folder ID if the project is in a folder
        
        createdAt: v.number(),
        updatedAt: v.optional(v.number()), // Timestamp of last update
    }).index("by_user", ["userId"]).index("by_user_updated", ["userId", "updatedAt"]).index("by_folder", ["folderId"]),


    folders: defineTable({
        name: v.string(),
        userId: v.id("users"),

        createdAt: v.number(),// Timestamp of last update
    }).index("by_user", ["userId"]),

});