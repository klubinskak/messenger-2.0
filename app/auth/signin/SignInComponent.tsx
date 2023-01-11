'use client';
import { getProviders } from 'next-auth/react';
import {signIn } from 'next-auth/react';

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>
};

function SignInComponent({providers}: Props) {
  return (
    <div className='flex justify-center'>
        {Object.values(providers!).map((provider) => (
            <div key={provider.name}>
                <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' onClick={() => {
                    signIn(provider.id, {
                        callbackUrl: process.env.VERCEL_URL || "http://localhost:3000"
                    })
                }}>
                    Sign in with {provider.name}
                </button>
            </div>
        ))}
    </div>
  )
}

export default SignInComponent