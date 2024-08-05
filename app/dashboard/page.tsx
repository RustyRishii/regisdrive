"use client";

import { SignOut } from "@/components/sign-out";
import Google from "next-auth/providers/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {});

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p>Dashboard</p>
      <h1>Welcome </h1>
      <SignOut />
    </div>
  );
}

export default Dashboard;
