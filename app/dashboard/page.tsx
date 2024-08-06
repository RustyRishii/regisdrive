"use client";

import { SignOut } from "@/components/auth/sign-out";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import { url } from "inspector";
import UserProfile from "@/components/auth/userProfile";

function Dashboard() {
  const [user, setUser] = useState<any>(null);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1>Welcome </h1>
      <UserProfile />
      <SignOut />
    </div>
  );
}

export default Dashboard;
