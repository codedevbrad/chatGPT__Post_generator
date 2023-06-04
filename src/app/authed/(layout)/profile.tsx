'use client'

import { SignedIn, UserButton } from "@clerk/nextjs";

  export default function UserAvatar ( ) {
        return (
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
        )
  }