'use client'
import makeGeneratedPosts from "./utils/fetchData";
import FacebookGenerated from './socialComponents/facebook'; 
import { useState, useEffect, useContext } from "react";
import { GenerationContext } from '../context';

import { GeneratedSearchComponentProps , GeneratedSearchProps } from "../props.search";

import PrePrompt from "./generateComponents/preprompt";
import LoadingComponent from "./generateComponents/loading/loading";


// Custom hook for fetch request
const useFetchData = ( searchQuery: GeneratedSearchProps ) => {

  // used to change the generatePosts component button back to initial state.
  const { setGeneratingState } = useContext(GenerationContext);
  // data and loading state's for fetching.
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 
        if (searchQuery) {
          console.log('useFetchData', searchQuery);
          // show that the app is now searching using the searchQuery.
          // set any previously searched data to empty for a new search.
          setIsLoading(true);
          setData([]);

          // fetch request to the API.
          const { generated } = await makeGeneratedPosts({ searchQuery });

          // Update state with fetched data and show loading has finished. 
          setData(generated);
          setIsLoading(false);
          setGeneratingState(false);
        } 
        else {
          console.log('when state is false');
          setIsLoading(false);
        }
      } 
      catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data');
      }
    };

    fetchData();

  // refresh the effect on any changes to the search 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ searchQuery ]);

  return [data, isLoading];
};


export default function GeneratedComponent({ search }: GeneratedSearchComponentProps ): JSX.Element {

  const [data, isLoading] = useFetchData( search );

  if (!search) {
    return (
       <PrePrompt />
    )
  }

  if (isLoading) {
    return (
       <LoadingComponent />
    )
  }

  if (!data) {
    throw new Error('Data not available');
  }

  return (
    <div> 
      <div className="grid grid-cols-3 gap-4">
        {data.map((idea: string , index: number ) => (
          <section key={`generatedIndex__${index}`} className="bg-gray-200 p-4">
            <FacebookGenerated generatedPost={idea} />
          </section>
        ))}
      </div>
    </div>
  );
}
