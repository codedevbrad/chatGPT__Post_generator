'use client'
import makeGeneratedPosts from "./utils/fetchData"
import FacebookGenerated from './socialComponents/facebook'
import { useState, useEffect, useContext } from "react"
import { GenerationContext } from '../context'

import { GeneratedSearchComponentProps , GeneratedSearchProps } from "../props.search"

import PrePrompt from "./generateComponents/preprompt"
import LoadingComponent from "./generateComponents/loading/loading"

import Guide from "@/app/(guideTour)/guide"


// Custom hook for fetch request
const useFetchData = ( searchQuery: GeneratedSearchProps ) => {
  // used to change the generatePosts component button back to initial state.
  const { setGeneratingBackToInitial } = useContext(GenerationContext);
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
          const generated = await makeGeneratedPosts({ searchQuery });

          // Update state with fetched data and show loading has finished. 
          setData(generated);
          setIsLoading(false);
          // Lets previous generateComponent reset the button back to initial state.
          setGeneratingBackToInitial();
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
      <Guide stepInGuide={4}>
        <LoadingComponent />
      </Guide>
    )
  }

  if (!data) {
    throw new Error('Data not available');
  }

  return (
    <div>         
        <h3 className="text-center my-4 dark:text-white"> Like these Ideas ? </h3>

        <div className="flex justify-center">
          why not save these to a pdf?
        </div>

        <Guide stepInGuide={5}>
            <div className="grid grid-cols-4 gap-4">
              { data.map((idea: string , index: number ) => (
                <section key={`generatedIndex__${index}`} className=" p-4">
                  <FacebookGenerated generatedPost={idea} />
                </section>
              )) }
            </div>
        </Guide>
     
    </div>
  );
}