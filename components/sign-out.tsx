"use client";
import { signOut } from "next-auth/react";

export async function SignOut() {
  const handleSignOut = async (e: any) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/" });
  };

  return (
    <form onSubmit={handleSignOut}>
      <button
        type="submit"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      >
        Sign out
      </button>
    </form>
  );
}
