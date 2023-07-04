'use client'
import { SignedIn, SignedOut , SignInButton } from "@clerk/nextjs"
import { LandAfterAuthedRoute } from "@/data"

export default function HeaderAuthAction ( ) {
    return (
      <>
        <SignedIn>
            <a href={ LandAfterAuthedRoute } className="-m-1.5 flex justify-center items-center p-4">
                To dashboard 
            </a>
        </SignedIn>
        <SignedOut>
            <SignInButton mode='modal'>
                <button className="cursor-pointer rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign in
                </button>
            </SignInButton>
        </SignedOut>
      </>
    )
}