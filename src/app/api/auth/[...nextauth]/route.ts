import NextAuth, {NextAuthOptions} from "next-auth";

import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter"; 
import { Adapter } from "next-auth/adapters";
import { prisma } from "@/utils/prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: String(process.env.GOOGLE_CLIENT_ID),
            clientSecret: String(process.env.GOOGLE_CLIENT_SECRET)
        })
    ], 
    secret: String(process.env.NEXT_SECRET),
    session: {
        strategy: "jwt",
        maxAge: 10800
    },
    
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};

