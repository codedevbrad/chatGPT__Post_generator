  'use client'

  import { useRouter } from 'next/navigation';

  export default function GeneratedContent ({ params }) {
    const router = useRouter();
  
    console.log( params,  );

    return (
      <div>
          <h1 className="text-lg"> Generate social media post ideas. </h1>
          <p> Post:  </p>
      </div>
    )
  }

