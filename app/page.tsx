"use server";

import Image from "next/image";
import { SignIn } from "@/components/sign-in";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const headersList = headers();
  return (
    <div className="bg-slate-600 h-100% min-h-screen flex flex-col items-center">
      <p className="text-3xl">Regis drive project</p>
      <h1 className="text-5xl p-10 align-middle items-center text-center">
        Manage google all your google drive files in one place.
      </h1>
      <Link href={"/dashboard"}>Dashboard</Link>
      <SignIn />
    </div>
  );
}
