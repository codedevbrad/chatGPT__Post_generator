import Sidebar from './(layout)/sidebar'
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta"
import Link from "next/link"
import GuideProvider from '../(guideTour)/context'
import GuideTour from '../(guideTour)/guideTour'

export async function generateMetadata({ params }) {
  return {
    title: 'SocialGenius dashboard',
    description: 'new data',
  };
} 

export default function AuthedLayout({ children, }: { children: React.ReactNode, }) {
    return (
          <body className='h-full scrollbar-hide'>   
                <SignedIn>
                  <Sidebar>
                     <GuideProvider>
                        <main className={'flex-col flex min-h-screen'}>
                              {children}
                              <GuideTour />
                        </main>   
                    </GuideProvider>
                  </Sidebar>
                </SignedIn>
                <SignedOut>
                  <p>You are signed out!</p>
                  <Link href="/">Sign In</Link>
                </SignedOut>
          </body>
    );
}
