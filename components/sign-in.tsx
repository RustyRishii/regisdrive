// components/SignIn.js
"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export function SignIn() {
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <form onSubmit={handleSignIn}>
      <button type="submit">Sign in with Google</button>
    </form>
  );
}
