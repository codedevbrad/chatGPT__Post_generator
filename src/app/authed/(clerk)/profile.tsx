'use client'

import { SignedIn, UserButton } from "@clerk/nextjs";

export default function UserAvatar ( ) {
    return (
        <SignedIn>
            <UserButton />
        </SignedIn>
    )
}