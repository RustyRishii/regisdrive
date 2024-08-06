"use client";

import { SignOut } from "@/components/auth/sign-out";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {});

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1>Welcome </h1>
      <SignOut />
    </div>
  );
}

export default Dashboard;
