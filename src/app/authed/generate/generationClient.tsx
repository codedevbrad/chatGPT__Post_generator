'use client'
import { GenerationProvider } from './context';
import GenerateComponent from "./generatePosts"
import GeneratedComponent from "./generatedPosts"
import { useState } from 'react'
import { GeneratedSearchProps } from './props.search'


export default function GenerateClient(): JSX.Element {
    
    const [search, setSearch] = useState<GeneratedSearchProps>(false);
  
    return (
      <div>
        <GenerationProvider>
            <h1 className="text-lg">Generate social media post ideas.</h1>
            <GenerateComponent setData={setSearch} />
            <GeneratedComponent search={search} />
        </GenerationProvider>
      </div>
    );
}