import { useState, useEffect, useContext } from "react"

export default function EditGeneration ({ }) {

    function modalToggle ( ) {
        
    }

    return (
      <span role="img" aria-label="edit" onClick={ () => modalToggle() }>
        ✏️
      </span>
    );
};