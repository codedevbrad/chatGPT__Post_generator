'use client';
import { useState } from "react";
import { randomMood } from "../../generatePosts/moods";
import classNames from "@/app/utils/classNames";

const Card = ({ prompt, mood }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
  };

  return (
    <div className="bg-white mt-7 rounded-lg p-4 shadow-md flex items-center mx-3">
      <div className={classNames(mood.bgColor, 'flex h-7 w-7 items-center justify-center rounded-full m-4')}>
        <mood.icon
          className={classNames(mood.iconColor, 'h-7 w-7')}
          aria-hidden="true"
        />
      </div>
      <span className="ml-4 text-md">{prompt}</span>
      <button
        className="ml-auto text-gray-500 hover:text-gray-700"
        onClick={() => handleCopyToClipboard(prompt)}
        aria-label="Copy to Clipboard"
      >
        📋
      </button>
    </div>
  );
};

  

export default function PrePrompt ( ) {

    const [ ideas , setIdeas ] = useState([
        { text: 'come up with post ideas for my travel agency advertising for someone Dreaming of an unforgettable vacation.' },
        { text: 'Show me some ideas for my fitness Business. I want to get new users pumped and interested in working out.' },
        { text: 'I need some post ideas for my E-Commerce store that sells Tshirts. Make sure to add that there is limited stock.' }
    ]);


    return (
        <div className="flex flex-col items-center">
            <h3> Ready to unlock your creativity? </h3>
            <h4 className="mt-3"> Here's some ideas for you... </h4> 
            <div className="flex flex-row">
                { ideas.map( ( idea , index ) =>
                    <Card prompt={ idea.text } mood={ randomMood() } key={ `card-index-${ index }` } />
                )}
            </div>
        </div>
    )
}