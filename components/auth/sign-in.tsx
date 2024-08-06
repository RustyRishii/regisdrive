"use client";
import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button className="btn btn-primary" onClick={() => signIn()}>
      Sign In
    </button>
  );
}
