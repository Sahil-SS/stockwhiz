"use client";
import CountrySelect from "@/components/forms/CountrySelect";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "@/lib/actions/auth.actions";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "INDIA",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
      console.log("Submitting signup data:", data);

      //SignUp Logic Here
      const result = await signUpWithEmail(data);
      if (result.success) router.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Sign Up Failed. Please try again.", {
        description: "An error occurred during sign up.",
      });
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Inputs */}
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full Name is required", minLength: 2 }}
        />
        <InputField
          name="email"
          label="Email Address"
          placeholder="johndoe@email.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          }}
        />
        <CountrySelect
          name="country"
          label="Select Country"
          control={control}
          error={errors.country}
          required={true}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 2 }}
        />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          control={control}
          error={errors.investmentGoals}
          options={INVESTMENT_GOALS}
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk tolerance"
          control={control}
          error={errors.riskTolerance}
          options={RISK_TOLERANCE_OPTIONS}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          control={control}
          error={errors.preferredIndustry}
          options={PREFERRED_INDUSTRIES}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
        <FooterLink
          text="Already have an Account"
          linkText="Sign In"
          href="/sign-in "
        />
      </form>
    </>
  );
};

export default SignUp;
