"use server";
import { auth } from "@/lib/better-auth/auth";
import { inngest } from "../inngest/client";
import { headers } from "next/headers";

export const signUpWithEmail = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  try {
    const response = await auth.api.signUpEmail({
      body: { email, password, name: fullName },
    });

    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    }

    return {
      success: true,
      data: response,
      message: "Sign Up Successful. Please verify your email.",
    };
  } catch (err) {
    console.log("sign Up failed", err);
    return { success: false, message: "Sign Up Failed" };
  }
};

export const signInWithEmail = async ({
  email,
  password,
}: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({
      body: { email, password },
    });

    return {
      success: true,
      data: response,
    };
  } catch (err) {
    console.log("sign In failed", err);
    return { success: false, message: "Sign Up Failed" };
  }
};

export const signOut = async () => {
  try{
    await auth.api.signOut({headers:await headers()});
  }catch(err){
    console.log("sign out failed", err);
    return { success: false, message: "Sign Out Failed" };
  }
} 


