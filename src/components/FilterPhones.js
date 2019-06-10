import React from 'react';

function FilterPhones ({search}){

     return(
         <p>
             Search:
             <input onChange={search}/>
         </p>
     )
}

export default FilterPhones;