import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';


export const authOptions = {
    //configure authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ], 
}

export default NextAuth(authOptions);
