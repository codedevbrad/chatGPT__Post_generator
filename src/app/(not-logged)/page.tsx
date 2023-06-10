'use client';

import { SignIn } from '@clerk/nextjs/app-beta';
 
export default function Home() {

  return (
    <main>
      <div>
        <h1 className="text-lg"> index page </h1>
        <SignIn />
      </div>
    </main>
  )
}