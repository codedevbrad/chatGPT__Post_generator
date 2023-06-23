import Sidebar from './(layout)/sidebar'
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: 'authed app 2',
    description: 'new data',
  };
} 

export default function AuthedLayout({ children, }: { children: React.ReactNode, }) {
    return (
          <body className='h-full scrollbar-hide'>
                <SignedIn>
                  <Sidebar>
                      <main className={'flex-col flex min-h-screen'}>
                          {children}
                      </main>
                  </Sidebar>
                </SignedIn>
                <SignedOut>
                  <p>You are signed out!</p>
                  <Link href="/">Sign In</Link>
                </SignedOut>
          </body>
    );
}
