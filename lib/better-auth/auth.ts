import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: Awaited<ReturnType<typeof betterAuth>> | null = null;

export const nextAuth = async () => {
  if (authInstance) return authInstance;

  const mongoose = await connectToDatabase();
  const db = mongoose.connection.db;

  if (!db) throw new Error("Database connection is not established");

  authInstance = betterAuth({
    database: mongodbAdapter(db),
    secret: process.env.BETTER_AUTH_SECRET || "default_secret",
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 10,
      autoSignIn: true,
    },
    plugins: [nextCookies()],
  });

  return authInstance;
};

export const auth =await nextAuth();
