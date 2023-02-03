import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';


export const authOptions = {
    providers: [
        GithubProvider(
            {
                clientId:  '52aae260a05fe19cba0a',
                clientSecret: 'ccb1ead50a204a11fffba15088d5482e7df1f30f'
            }
        )
    ]
}

export default NextAuth(authOptions);