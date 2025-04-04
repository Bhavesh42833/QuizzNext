import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { client as sanityClient } from "@/sanity/lib/client"; // Your configured Sanity client
import { nanoid } from "nanoid";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false; // Ensure email exists

      try {
        // Check if user exists in Sanity
        const query = `*[_type == "user" && email == $email][0]`;
        const existingUser = await sanityClient.fetch(query, { email: user.email });

        if (!existingUser) {
          // Create new user in Sanity
          await sanityClient.create({
            _id: `user-${nanoid()}`,
            _type: "user",
            name: user.name,
            email: user.email,
            avatar: user.image,
          });
          console.log("✅ New user created in Sanity:", user.email);
        } else {
          console.log("⚡ User already exists in Sanity:", user.email);
        }
      } catch (error) {
        console.error("❌ Error checking/creating user in Sanity:", error);
        return false;
      }

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub; // Attach user ID from token
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
