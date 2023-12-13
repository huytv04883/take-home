
"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "./components/Button/Button";

const Home = () => {
  const router = useRouter();
  const { data: user, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated..."
  }

  return <main className="main-content">
    <div className="user-data">
      {user && <span>{`Hello ${user.user?.email}`}</span>}
      <Button onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  </main>;
};

export default Home;
