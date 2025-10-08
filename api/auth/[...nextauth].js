import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: import.meta.env.GITHUB_ID,
      clientSecret: import.meta.env.GITHUB_SECRET,
    }),
    // Add other providers as needed
  ],
  secret: import.meta.env.NEXTAUTH_SECRET,
});
