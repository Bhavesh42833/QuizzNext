"use client"; // This forces it to run on the client-side

import { signIn, signOut } from "@/auth";

export default function AuthButton({ session }) {
  return (
    <>
      {session ? (
        <form
          action={async () => {
            await signOut();
          }}
        >
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
          >
            Sign Out
          </button>
        </form>
      ) : (
        <form
          action={async () => {
            await signIn("github");
          }}
        >
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Sign In with GitHub
          </button>
        </form>
      )}
    </>
  );
}
