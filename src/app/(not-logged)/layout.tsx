 
export async function generateMetadata({ params }) {
  return {
    title: 'welcome',
    description: 'new data',
  };
} 

export default function NonAuthedLayout({ children, }: { children: React.ReactNode, }) {
    return (
      <body className='h-full'>
            <main className={'flex-col flex min-h-screen'}>
                {children}
            </main>
      </body>
    );
}
