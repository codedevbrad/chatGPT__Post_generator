import '../css/globals.css' 
import { ClerkProvider } from "@clerk/nextjs/app-beta"

export default function RootLayout({ children, } : { children: React.ReactNode }): JSX.Element {
  return ( 
      <ClerkProvider>
          <html lang="en" className='h-full'>
              <head /> 
              { children }
          </html>    
      </ClerkProvider>
  )
}