import GoogleProvider from "next-auth/providers/google"
import { getServerSession } from "next-auth"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
}

export const getAuthSession = () => getServerSession(authOptions);
