import { auth } from "@/auth";
import AuthButton from "@/app/components/AuthButton.js"; // Import the Client Component

export default async function Home() {
  const session = await auth(); // ✅ Still runs on the server
  console.log(session);

  return (
    <>
      <AuthButton session={session} />
    </>
  );
}
