"use client";

/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { RedirectType, redirect, useRouter } from "next/navigation";

export type InFormType = {
  phoneNumber: string;
};

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InFormType>({
    defaultValues: {
      phoneNumber: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const router = useRouter();

  const onSubmit = async (data: InFormType) => {
    setLoading(true);
    setError(undefined);
    signIn("credentials", {
      redirect: false,
      phoneNumber: data.phoneNumber,
      callbackUrl: `${window.location.origin}`,
    }).then((data) => {
      if (data?.error) {
        return setError(data.error);
      }
      if (data?.ok) {
        router.refresh();
        router.push("/");
      }
    });
  };
  return (
    <div className="flex flex-col h-full">
      <div className="mb-2 text-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <span className="opacity-80">Sign-In to your account</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 flex-1"
      >
        <Input
          placeholder="+251 912 810 779"
          {...register("phoneNumber", {
            required: true,
            validate: (data) => {
              const pattern = /^\+251\s\d{3}\s\d{3}\s\d{3}$/;
              if (!data) return "Phone Number Required";
              else {
                if (!pattern.test(data)) {
                  return "Please Enter a Valid Phone Number";
                }
              }
            },
          })}
        />
        {error && <p className="text-destructive mx-4 text-sm">{error}</p>}
        {errors.phoneNumber && (
          <p className="text-destructive mx-4 text-sm">
            {errors.phoneNumber?.message}
          </p>
        )}
        <Button
          disabled={loading}
          type="submit"
          size={"lg"}
          className="rounded-full  mt-2"
        >
          {loading ? "Signning In" : "Sign In"}
        </Button>
      </form>
      <span className="flex items-center gap-1 mt-2 opacity-80 text-base">
        Don't have an account,
        <Button variant={"link"} className="p-0">
          <Link href={"/auth/sign-up"}>Create One</Link>
        </Button>
      </span>
    </div>
  );
};
export default SignInPage;
