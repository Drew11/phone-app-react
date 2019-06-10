import React from 'react';

function SortPhones({sort}){
        return(
            <p>
                Sort by:
                <select onChange={(event)=>sort(event)}>
                    <option value="age">Newest</option>
                    <option value="name">Alphabetical</option>
                </select>
            </p>
        )
    }

export default SortPhones;