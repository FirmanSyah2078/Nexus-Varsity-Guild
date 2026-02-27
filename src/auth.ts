import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Import Providers 
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Wajib pakai JWT agar Middleware Next.js bisa membaca sesi
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // LOGIKA LOGIN MANUAL (EMAIL & PASSWORD)
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // 1. Cari user di database berdasarkan email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        });

        // Jika user tidak ada, atau daftar pakai Google/Discord (tidak punya password)
        if (!user || !user.password) return null;

        // 2. Cocokkan password yang diinput dengan password acak di database
        const isPasswordValid = await bcrypt.compare(
          credentials.password as string, 
          user.password
        );

        if (!isPasswordValid) return null;

        // 3. Jika cocok, kembalikan data user ke dalam sesi
        return user;
      }
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
});