import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import authOptions from the route file
import { signIn, signOut } from "next-auth/react";

export const auth = async () => getServerSession(authOptions);
export { signIn, signOut };
