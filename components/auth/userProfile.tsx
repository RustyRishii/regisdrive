import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    // Use type assertion to tell TypeScript that session.user is defined
    const user = session.user as { name: string; email: string; image: string };

    return (
      <div>
        <h1>Welcome, {user.name}</h1>
        <Image src={user.image} alt={user.name} />
        <p>Email: {user.email}</p>
      </div>
    );
  }

  return <p>You are not logged in.</p>;
}
