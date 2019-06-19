import React from 'react';

function FilterPhones ({search}){
     return(
         <p>
             Search:
             <input onChange={(event)=>search(event)}/>
         </p>
     )
}

export default FilterPhones;